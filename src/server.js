//importaciones

import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware"
import webpackConfig from "../webpack.config"

//inicializando paquetes
const app = express();

//configurar servidor
app.set("port", process.env.PORT || 3000)

//rutas
app.get("/", (req,res)=>{
    res.send("hola");
})
app.get("/api",(req,res)=>{
    res.json({api:"funciona"});
})

//start the server
app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"));
})