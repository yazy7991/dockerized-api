import express from 'express';
import { creatUser, deleteUser, getAllUser, getUserById, updateUser } from '../controllers/userController.js';

const router = express.Router();

router.get("/user", getAllUser);

router.post("/user", creatUser);

router.get("/user/:id", getUserById);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

export default router;
