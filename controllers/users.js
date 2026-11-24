import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.json(users);
};

export const createUser = (req, res) => {
    const user = { ...req.body, id: uuidv4() };
    users.push(user);
    res.status(201).json(user);
};

export const getUser = (req, res) => {
    const user = users.find((u) => u.id === req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
};
