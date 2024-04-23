


const cors = require('cors');
const express = require('express');
const fs = require("fs");
const https = require("https");
//Leer archivo
const llavePrivada = fs.readFileSync("private.key");
const certificado = fs.readFileSync("certificate.crt");
const app = express();
const port = 4000;
const activoRouter = require('./routers/activoRuter');
// const activoRouter = require('./controladores/activoControler.js');
// const ubicacionRouter = require('./routers/ubicacionRouter.js');
// const responsableRouter = require('./routers/responsableRouter.js');
// const activo = require('./modulos/activo.js');
const corsOption = {
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: '*'
}
app.use(express.json());
app.use(cors(corsOption));

// Rutas para activos
app.use("/activos",activoRouter);
// Rutas para ubicaciones
// app.use("/ubicaciones",ubicacionRouter);
// Rutas para responsables
// app.use("/responsables",responsableRouter);
app.get('/', (req, res) => {
    res.send("Bienvenido a mi WEB!");
});
const credenciales = {
    key: llavePrivada,
    cert: certificado,
    passphrase: "123456" //passwd de la llave privada usado en la creación del certificado
};

//crear servidor con https
const httpsServer = https.createServer(credenciales,app);
//configurar el puerto
httpsServer.listen(port, () => {
    console.log('Servidor https escuchando por el puerto:', port);
    }).on('error', err => {
    console.log('Error al inciar el servidor:', err);
});
