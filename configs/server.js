'use strict'

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { dbConnection } from './mongoDB.js';
import authRoutes from '../src/auth/auth.routes.js';
import userRouter from '../src/user/user.routes.js';
import swaggerRoutes from './swaggerConfig.js';
import publicactionRouter from '../src/publications/publication.routes.js'


const middlewares = (app) => {
    app.use(express.urlencoded({ extended: false}));
    app.use(express.json());
    app.use(cors());
    app.use(helmet());
    app.use(morgan('dev'));
    app.use(swaggerRoutes);
}

const routes = (app) => {
    app.use('/gestorOpiniones/v1/auth', authRoutes),
    app.use('/gestorOpiniones/v1/user', userRouter),
    app.use('/gestorOpiniones/v1/publications', publicactionRouter)
}

const conectarDB = async() => {
    try{
        await dbConnection();
        console.log('Conexion exitosa con la base de datos');
    }catch (error) {
        console.log('Error al conectar con la base de datos', error);
    }

}

export const initServer = async() => {
    const app = express();
    const port = process.env.PORT || 3000;

    try {
        middlewares(app);
        conectarDB();
        routes(app);
    } catch (err) {
        console.log(`Server init failed: ${err}`)
    }

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}