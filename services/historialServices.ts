import UserRepository from '../repositories/UserRepository';
import Pedido from '../Dto/pedidosDto'; 

class HistorialService {
    static async getUserOrdersByEmail(id_user: number): Promise<Pedido[]> {
        return await UserRepository.getUserOrders(id_user);
    }
}

export default HistorialService;
