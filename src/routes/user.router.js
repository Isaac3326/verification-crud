const { getAll, create, getOne, remove, update, verifyEmail, loggin, getLoggedUser } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT')
const userRouter = express.Router();

userRouter.route('/users')
    .get(verifyJWT, getAll)
    .post(create);


userRouter.route('/users/verify/:code')
    .get(verifyJWT, verifyEmail)


userRouter.route('/users/login')    
    .post(loggin)

userRouter.route('/users/me')
    .get(verifyJWT, getLoggedUser)    

userRouter.route('/users/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = userRouter;