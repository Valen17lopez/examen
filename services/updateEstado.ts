import UserRepository from '../repositories/UserRepository';
import UpdateEstado from '../Dto/UpdateEstadoDto';

class EstadoServices {
    static async UpdateEstado(id_pedi:number, estado_pedi:string) {
        try {
            const estdo: UpdateEstado ={
                id_pedi,
                estado_pedi
            }
            const result = await UserRepository.updateEstado(estado_pedi)
            return result
        } catch (error) {
            throw error;
        }
    }
}



export default EstadoServices;