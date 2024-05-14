import db from '../config/config-db';
import User from '../Dto/UserDto';
import Auth from '../Dto/UserAuthDto';
import Productos from '../Dto/productosDto';
 import  Pedido  from '../Dto/pedidosDto';
import UserDto from '../Dto/UserDto';
import UpdateEstado from '../Dto/UpdateEstadoDto';

class UserRepository {

    static async add(user: User){     
        const sql = 'INSERT INTO users (email, password, name, lastName) VALUES (?,?,?,?)';
        const values = [user.email, user.password, user.name, user.lastName];   
        return db.execute(sql, values);
    }

    static async logeo(auth: UserDto){        
        const sql = 'SELECT * FROM users WHERE email = ?';
        const values = [auth.email];     
        return db.execute(sql, values);   
    }

    static async getAllProductos(): Promise<Productos[]> {
        try { 
            const sql = 'SELECT * FROM productos ';
            const [rows] = await db.execute(sql);
    
            if (!Array.isArray(rows)) {
                throw new Error('Los datos de los productos son válidos');
            }
    
            const product: Productos[] = rows.map((row: any) => {
                return {
                    id_prod: row.id,
                    name_prod: row.name_prod,
                    descripccion: row.descripccion,
                    precio: row.precio,
                    imagen: row.imagen
                };
            });
    
            return product;
        } catch (error) {
            console.error('Error al obtener el menu:', error);
            throw error;
        }
    }


    static async registrarPedido(pedido: Pedido): Promise<boolean> {
        try {
            
            const sql = 'INSERT INTO pedidos (id_user, id_prod, direccion_pedido, estado_pedi ) VALUES (?, ?, ?, ?)';
            const values = [pedido.id_user, pedido.id_prod, pedido.direccion_pedido, pedido.estado_pedi];

            const [result] = await db.execute(sql, values);

            
            if (result && ('affectedRows' in result) && result.affectedRows && result.affectedRows > 0) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Error al registrar el pedido de domicilio:', error);
            throw error;
        }
    }
    

    static async getAlldomicilio(): Promise<Productos[]> {
        try { 
         const sql = 'SELECT * FROM productos  ';
            const [rows] = await db.execute(sql);
    
            if (!Array.isArray(rows)) {
              throw new Error('Los datos del menu son válidos');
          }
    
            const product: Productos[] = rows.map((row: any) => {
                return {
                    id_prod: row.id_prod,
                    name_prod: row.name_prod,
                    descripccion: row.descripccion,
                    precio: row.precio,
                    imagen: row.imagen
                };
            });
    
            return product;
        } catch (error) {
            console.error('Error al obtener el menu:', error);
            throw error;
        }
    }

    static async getUserOrders(id_user: number): Promise<Pedido[]> {
        try {
            const sql = 'SELECT * FROM pedidos WHERE id_user = ?';
            const [rows] = await db.execute(sql, [id_user]);
    
            if (!Array.isArray(rows)) {
                throw new Error('Los datos del historial de pedidos no son válidos');
            }
    
            const userOrders: Pedido[] = rows.map((row: any) => {
                return {
                    id_user: row.id_user,
                    id_prod: row.id_prod,
                    direccion_pedido: row.direccion_pedido,
                    estado_pedi: row.estado_pedi
                  
                };
            });
    
            return userOrders;
        } catch (error) {
            console.error('Error al obtener el historial de pedidos:', error);
            throw error;
        }
    }


    static async updateEstado(estado: UpdateEstado): Promise<boolean> {
        const sql = 'UPDATE pedido SET estado_pedi = ? WHERE id_pedi = ?';
        const values = [estado.estado_pedi,  estado.id_pedi];

        const [result] = await db.execute(sql, values);


        if (result && ('affectedRows' in result) && result.affectedRows && result.affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }
}

export default UserRepository;