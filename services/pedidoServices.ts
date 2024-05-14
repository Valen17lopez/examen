import UserRepository from '../repositories/UserRepository';
import PedidoProducto from '../Dto/pedidosDto';

class PedidoService {

    static async pedirProductos(id_user: number,id_prod: number, direccion_pedido: string, estado_pedi:string): Promise<boolean> {
        try {
            const pedido: PedidoProducto = {
                id_user,
                id_prod,
                direccion_pedido,
                estado_pedi
            };
            const result = await UserRepository.registrarPedido(pedido);
            return result;
        } catch (error) {
            console.error('Error al registrar el pedido de domicilio:', error);
            throw error;
        }
    }
}

export default PedidoService;
