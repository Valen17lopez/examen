import updateEstadoService from '../services/updateEstado'
import estadoDto from '../Dto/UpdateEstadoDto'
import { Request, Response } from 'express';



let updateEstado = async (req: Request, res: Response) => {
    try {
        const { 
            id_pedi,
            estado_pedi,  
        } = req.body;

        await updateEstadoService.UpdateEstado(id_pedi, estado_pedi);

        return res.status(200).json({
            status: 'success',
            message: 'estado updated successfully'
        });
    } catch (error:any) {
        return res.status(500).json({
            status: 'error',
            message: 'Failed to update profile',
            error: error.message
        });
    }
}

export default updateEstado;
