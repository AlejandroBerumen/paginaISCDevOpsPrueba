const express = require("express");
const React = require('react');
const session = require("express-session");
const multer = require('multer');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const config = require("./config/config");
const authRouter = require("./routes/authRoutes");
const publicacionRouter = require("./routes/publicacionRoutes");
const proyectoRouter = require("./routes/proyectoRoutes");
const adminRouter = require("./routes/adminRoutes");
const solicitudRouter = require("./routes/solicitudRoutes");
const imagenGaleriaRouter = require("./routes/imagenGaleriaRoutes");
const documentoRouter = require("./routes/documentoRoutes");

const app = express();
const port = config.port;


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


// ------------------------middlewares-------------------------
app.use(cors())
app.use(express.json());
app.use(upload.any());
app.use(express.static(path.join(__dirname)));
app.use(session({
    secret: 'ABC123456',
    resave: true,
    saveUninitialized: true
}));
// ------------------------------------------------------------

// --------------------------routers---------------------------
authRouter(app);
adminRouter(app);
publicacionRouter(app);
proyectoRouter(app);
solicitudRouter(app);
imagenGaleriaRouter(app);
documentoRouter(app);
// ------------------------------------------------------------

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'vista', 'index.html'));
});

app.get('/panel', (req, res)=>{
    if(!req.session.loggedin)
        res.sendFile(path.join(__dirname, 'vista/panel', 'adminlogin.html'));
    else res.redirect('/adminPanel');
});

app.get('/prueba', (req, res)=>{
    res.sendFile(path.join(__dirname, 'vista/pagina/galeria/build', 'index.html'));
});

app.post('/panel', (req, res)=>{
    const data = req.body;
    console.log(data);
    var registros = new Array();
    const promesa = new Promise(function(completado, error){
            fetch("http://localhost:3000/admins/admin", {
            method: "GET", 
            mode: "cors", 
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {
                "Content-Type": "application/json"
        }}).then((res) => {
            return res.json()
        }).then((data)=>{
            respuesta = data;
            completado("1");
            return data;
        }).catch((e) => console.error(e));
        }).then(
            function(value){
                if(value=="1"){
                    var validado = false;
                    for(var i=0; i<respuesta.length; i++){
                        var registro = new Array();
                        registro.push(respuesta[i]["nombre_usuario"]);
                        registro.push(respuesta[i]["contrasena"]);
                        registros.push(registro);
                    }
                    for(var i=0; i<registros.length; i++){
                        var match = bcrypt.compare(data.contra, registros[i][1]);
                        if(registros[i][0]==data.usuario && match)
                            validado = true;
                    }
                    if(validado){
                        req.session.loggedin = true;
                        req.session.loggedin.expires = new Date(Date.now() + 1);
                        res.redirect('/adminPanel');
                    }else{
                        res.send('Usuario no valido');
                    }
                }
            }
        );
})

app.get('/adminPanel', (req, res)=>{
    if(req.session.loggedin)
        res.sendFile(path.join(__dirname, 'vista/panel', 'panel.html'));
    else res.redirect('/panel');
});

app.get('/cerrarsesion', (req, res)=>{
    req.session.destroy();
    res.redirect('/panel');
});

app.use(function(req, res){
    res.type('html');
    res.status(404);
    res.sendFile(path.join(__dirname, 'vista/pagina', '404.html'));
});

app.listen(port, '0.0.0.0', async ()=>{

    // rutas
    const paths = [
        config.filepath,
        config.imagerootpath,
        config.imagegallerypath,
        config.imagepublicationpath,
    ];

    for(const path of paths){
        try {
            await fs.access(path); // Verificando si la carpeta existe
        } catch (error) {
            if (error.code === 'ENOENT') {
                await fs.mkdir(path); // Si la carpeta no existe, la creamos
            }
        }
    }

    console.log(`Servidor ejecutandose en http://localhost:${port}`);
});