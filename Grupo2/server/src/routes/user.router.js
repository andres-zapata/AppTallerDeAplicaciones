const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.model'); // User model

/* Get all Users */
userRouter.get('/', (req, res, next) => {
    User.find({} , function(err, result){
        if(err){
            res.status(400).send({
                'success': false,
                'error': err.message
            });
        }
        res.status(200).send({
            'success': true,
            'data': result
        });
    });
});

/* Get Single User */
userRouter.get("/:User_id", (req, res, next) => {
    User.findById(req.params.User_id, function (err, result) {
        if(err){
             res.status(400).send({
               success: false,
               error: err.message
             });
        }
        res.status(200).send({
            success: true,
            data: result
        });
     });
});


/* Add Single User */
userRouter.post("/add", (req, res, next) => {
  let newUser = {
    Nombre: req.body.Nombre,
    Correo: req.body.Correo,
    Telefono: req.body.Telefono,
    TelefonoApoderando: req.body.TelefonoApoderando,
    RutSinDV: req.body.RutSinDV,
    DigitoVerificador: req.body.DigitoVerificador,
    Localidad: req.body.Localidad,
    Direccion: req.body.Direccion
  };
   User.create(newUser, function(err, result) {
    if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
    }
      res.status(201).send({
        success: true,
        data: result,
        message: "User created successfully"
      });
  });
});

/* Edit Single User */
userRouter.patch("/edit/:User_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  User.findByIdAndUpdate(req.params.User_id,{ $set: fieldsToUpdate }, { new: true },  function (err, result) {
      if(err){
          res.status(400).send({
             success: false,
            error: err.message
            });
      }
      res.status(200).send({
        success: true,
        data: result,
        message: "User updated successfully"
        });
  });
});

/* Delete Single User */
userRouter.delete("/delete/:User_id", (req, res, next) => {
  User.findByIdAndDelete(req.params.User_id, function(err, result){
      if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
      }
    res.status(200).send({
      success: true,
      data: result,
      message: "User deleted successfully"
    });
  });
});

module.exports = userRouter;
