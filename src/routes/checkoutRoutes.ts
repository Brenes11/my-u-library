import { Router } from 'express';
import { checkoutBookController, returnBookController, getCheckoutsController, getCheckoutDetailsController  } from '../controllers/checkoutController';

const router = Router();

router.post('/checkout', checkoutBookController);
router.post('/return/:id', returnBookController);
router.get('/', getCheckoutsController);
router.get('/checkout/:id', getCheckoutDetailsController);

export default router;
