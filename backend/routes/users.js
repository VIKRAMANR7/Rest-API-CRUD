import express from "express";

import {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();



// Route to get users
router.get("/", getUsers);

router.post("/", createUser);

// /users/2 => req.params {id: 2}
router.get("/:id", getUser);

router.delete("/:id", deleteUser);

//if you want to change everything you use PUT method
//if you want to have partial modification then use PATCH method
router.patch("/:id", updateUser);

export default router;
