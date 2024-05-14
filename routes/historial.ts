import express from 'express';
import historialController from '../controllers/historial-controller';
import validateToken from '../Milddleware/validateToken';

const router = express.Router();

router.get('/', validateToken, historialController.getUserOrders);

export default router;
