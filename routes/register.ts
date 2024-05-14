import express from "express";
import registerController from '../controllers/register-controller';
import menusController from "../controllers/productos-controller";
const router = express.Router();


router.post('/', registerController, menusController.getmenus);


export default router;