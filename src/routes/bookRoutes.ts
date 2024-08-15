// /src/routes/bookRoutes.ts

import { Router } from 'express';
import { createBookController, getBooksController, getBookByIdController } from '../controllers/bookController';

const router = Router();

router.post('/addbook', createBookController);
router.get('/getallbooks', getBooksController);
router.get('/getbookbyid/:id', getBookByIdController); 

export default router;
