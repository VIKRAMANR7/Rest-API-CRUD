import { v4 as uuidv4 } from "uuid";

// Example user data
let users = [];

export const createUser = (req, res) => {
  const user = req.body; // Extract the user from the request body

  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId); // Add the user to the array

  res.send(`User with the username ${user.firstName} added to database`);
};

export const getUsers = (req, res) => {
  res.json(users); // Sends users array back as JSON
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);
  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }
  res.send("User has been updated");
};
