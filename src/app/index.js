const express = require('express');
const app = express();
const connection = require("./services/db")
const port = 3005
app.use(express.json())


app.get('/test/product', (req, res) => { 
  res.send('Hola, desde productos!'); 
});

app.post('/users',async (resquets, response) => {
  const data = resquets.body;
  const db = await connection;
  const nombre_usuario = data.nombre_usuario;
  const contrasena = data.contrasena;
  const nombre_completo = data.nombre_completo;
  const correo_electronico = data.correo_electronico;
  const telefono = data.telefono;
  const rol = data.rol;

  const sql =
    'INSERT INTO `usuarios`(`nombre_usuario`, `contrasena`,`nombre_completo`, `correo_electronico`, `telefono`, `rol`)' +
     `VALUES ("${nombre_usuario}","${contrasena}","${nombre_completo}","${correo_electronico}","${telefono}","${rol}")`;

  const [result, fields] = await await db.query(sql);
  response.send(result);
})


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});