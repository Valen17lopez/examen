import { Request, Response } from "express"; 
import UserService from "../services/UserServices"; 
import Auth from "../Dto/UserAuthDto"; 
import { generateToken } from "../helpers/createToken"; 


const authController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body; //Extrae el correo electrónico y la contraseña 
        
        const login = await UserService.auth(new Auth(email, password)); //Llama al método auth del servicio UserService, pasándole un nuevo objeto Auth que contiene el correo electrónico y la contraseña del usuario

        if (login.logged) {
            return res.status(200).json({
                status: login.status,
                token:  await generateToken(email)
            });
        } else {
            return res.status(401).json({ 
                status: 'Incorrect username or password'
            });
        }
    } catch (error) {
        return res.status(500).json({ 
            status: 'Internal server error'
        });
    }
}

export default authController;
