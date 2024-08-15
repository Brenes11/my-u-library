import { Router } from 'express';
import { createUserController, getUsersController } from '../controllers/userController';

const router = Router();

router.post('/createuser', createUserController);
router.get('/getallusers', getUsersController);

export default router;
