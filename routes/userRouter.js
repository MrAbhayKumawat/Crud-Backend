import express from 'express';
import { createUser, updateUser, deleteUser, findAllUsers, findUser } from '../controller/userController.js';

const router = express.Router();

router.post("/createUser", createUser);

router.put("/updateUser/:id", updateUser);

router.delete("/deleteUser/:id", deleteUser);

// Route to find all users
router.get("/getAll", findAllUsers);

+router.get("/findUser/:id", findUser);

export default router;
