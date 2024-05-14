import UserRepository from '../repositories/UserRepository';

class ProductService {
    static async getAllProductos() {
        return await UserRepository.getAllProductos();
      }
}
export default ProductService;