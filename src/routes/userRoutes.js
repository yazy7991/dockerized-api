import express from 'express';
import { createUser, deleteUser, getAllUser, getUserById, updateUser } from '../controllers/userController.js';
import validateUser from '../middlewares/inputValidator.js';

const router = express.Router();

router.get("/user", getAllUser);

router.post("/user",validateUser ,createUser);

router.get("/user/:id", getUserById);

router.put("/user/:id",validateUser ,updateUser);

router.delete("/user/:id", deleteUser);

export default router;
