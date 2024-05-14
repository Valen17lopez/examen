import express from "express";
import productosController from "../controllers/productos-controller";
import validateToken from "../Milddleware/validateToken";

const router = express.Router();


router.get('/', validateToken, productosController.getmenus);

export default router;