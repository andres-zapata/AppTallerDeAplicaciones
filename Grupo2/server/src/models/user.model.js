const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Number, unique: true
    },
    Nombre: {
        type: String, required: true
    },
    Correo: {
        type: String, required: true
    },
    Telefono: {
        type: Number, required: true}
    ,
    TelefonoApoderado: {
        type: Number}
        ,
    RutSinDV: {
        type: String, required: true}
    ,
    DigitoVerificador: {
        type: String, required: true}
        ,
    Localidad: {
        type: String, required: true}
        ,
    Direccion: {
        type: String, required: true
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;