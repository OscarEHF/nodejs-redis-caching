import axios from 'axios';

export const characters = async (req, res) => {
  res.json({ message: 'Hello World!' });
};

export const character = (req, res) => {
  res.json({ message: 'Character' });
};