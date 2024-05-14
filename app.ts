import express from "express";
import bodyParser from 'body-parser';
import products from './routes/productos';
import register from './routes/register';
import auth from './routes/auth';
import pedido from './routes/pedido'; 
import historial from './routes/historial'; 
import estado from './routes/estado';

import dotenv from "dotenv";

dotenv.config();

const app = express().use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

app.use('/register', register);
app.use('/auth', auth);
app.use('/products', products);
app.use('/pedido', pedido); 
app.use('/historial', historial);
app.use('/estado',estado);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message)
});