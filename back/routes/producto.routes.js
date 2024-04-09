import { Router } from "express";
import productoController from "../controllers/producto.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { postProductoValidator } from "../validators/producto.validator.js";

console.log(productoController)
const routeProducto = Router();

routeProducto.get("/", productoController.getProducto)
routeProducto.get("/:id", productoController.getProductoUnico)
routeProducto.post("/", validate(postProductoValidator), productoController.postProducto)
routeProducto.put("/:id", productoController.updateProducto)


export default routeProducto;