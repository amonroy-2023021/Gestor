import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gestor Opiniones API',
      version: '1.0.0',
      description: 'API para gestionar publicaciones y usuarios',
    },
    servers: [
      {
        url: 'http://localhost:3000/gestorOpiniones/v1',
      },
    ],
  },
  apis: ['./src/publications/publication.routes.js'],
};

const swaggerDocs = swaggerJsdoc(options);

export { swaggerDocs, swaggerUi};


