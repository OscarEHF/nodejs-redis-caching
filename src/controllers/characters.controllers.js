import axios from 'axios';
import redis from "redis";
import { promisify } from 'util';

const client = redis.createClient({
  host: '127.0.0.1',
  port: 6379
});

const REDIS_GET = promisify(client.get).bind(client);
const REDIS_SET = promisify(client.set).bind(client);

const cacheResponse = async ({ url, key }) => {

  const cachedResponse = await REDIS_GET(key);

  if (cachedResponse) {
    return JSON.parse(cachedResponse);
  }

  const response = await axios.get(url);
  const { data } = response;

  await REDIS_SET(key, JSON.stringify(data));

  return data;

}

export const characters = async (req, res) => {

  try {
    const data = await cacheResponse({
      url: 'https://rickandmortyapi.com/api/character',
      key: 'characters'
    });
  
    res.json(data);
  } catch (err) {
    return res.status(err.response.status).json({ message: err.message });
  }


};

export const character = async (req, res) => {

  try {
    const { id } = req.params;
  
    const data = await cacheResponse({
      url: `https://rickandmortyapi.com/api/character/${id}`,
      key: id
    });
  
    res.json(data);
  } catch (err) {
    return res.status(err.response.status).json({ message: err.message });
  }


};