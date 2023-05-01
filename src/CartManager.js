import { promises as fs } from 'fs'

export class CartManager {
    constructor(path) {
        this.path = path
    }

    static incrementarID() {
        if (this.idIncrement) {
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }

    async createCarrito() {
        try {
            const cartJSON = await fs.readFile(this.path, 'utf-8')
            const carts = JSON.parse(cartJSON)
            const carrito = {
                id: CartManager.incrementarID(),
                cantidad: []
            }
            carts.push(carrito)
            await fs.writeFile(this.path, JSON.stringify(carts))
            return "Carrito creado"
        } catch(error){
            return error
        }
    }


    async getCartById(id) {
        const cartJSON = await fs.readFile(this.path, 'utf-8')
        const carts = JSON.parse(cartJSON)
        if (carts.some(cart => cart.id === parseInt(id))) {
            return carts.find(cart => cart.id === parseInt(id))
        } else {
            return "Carrito no encontrado"
        }
    }

    async addProductCart(id, quantity, idCart) {
        const cartJSON = await fs.readFile(this.path, 'utf-8')
        const carts = JSON.parse(cartJSON)
        const carrito = carts.find(cart => cart.id === parseInt(idCart))
        if (carrito.cantidad.some(product => product.id === parseInt(id))) {
            
        } else {

        }
    }
}


