import express from 'express';
import estado from '../controllers/estado-controller';
import validateToken from '../Milddleware/validateToken';

const router = express.Router();

router.put('/', validateToken, estado);

export default router;
