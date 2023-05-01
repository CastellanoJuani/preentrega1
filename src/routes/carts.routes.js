import { Router } from "express";
import { CartManager } from "../CartManager";
import { ProductManager } from "../ProductManager";

const router = Router()

const productManager = new ProductManager()
const cartsManager = new CartManager()

const products = productManager.getProducts()
const carts = cartsManager()
