import express from "express";
import route from "../routes/index.routes.js";
import pgService from "../service/pg.service.js";
import middleware from "../middlewares/index.middleware.js";

export default class Server{

    constructor(){
        this.app = express();
        this.port = 8000;
    }

    connectionDB(){
        new pgService();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(middleware)
    }

    routes(){
        this.app.use(route);
    }

    runServer(){
        this.app.listen(this.port, ()=>{
            console.log(`Estoy por el puerto ${this.port}`);
        });
    }

    load(){
        this.connectionDB();
        this.middlewares();
        this.routes();
        this.runServer();
    }
}