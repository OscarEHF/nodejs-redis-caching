import fetch from 'node-fetch';

export const characters = async (req, res) => {
  res.json({ message: 'Hello World!' });
};

export const character = (req, res) => {
  res.json({ message: 'Character' });
};