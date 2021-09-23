const express = require('express')
const app = express()


//Usado para cargar los modelos en la base de datos
const db = require('./models')

db.sequelize.sync().then(() => {

app.listen(3001, () => {
    console.log("7Pixel 20210922 - Server runnig on port 3001");
});
});