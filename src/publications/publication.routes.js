import { Router } from 'express';
import { savePublication, getPublications, deletePublications } from './publication.controller.js';
import { validarCampos } from '../middleware/validar-campos.js';
import { validarJWT } from "../middleware/jwt-validator.js";
import { eliminarPublicacion } from '../middleware/publications-validator.js';

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Publications
 *   description: API para gestionar publicaciones
 */

/**
 * @swagger
 * /publications/submit:
 *   post:
 *     summary: Crear una nueva publicación
 *     tags: [Publications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               categoria:
 *                 type: string
 *               texto:
 *                 type: string
 *     responses:
 *       200:
 *         description: Publicación creada exitosamente
 *       500:
 *         description: Error al subir la publicación
 */
router.post('/submit', validarJWT, validarCampos, savePublication);

/**
 * @swagger
 * /publications:
 *   get:
 *     summary: Obtener todas las publicaciones
 *     tags: [Publications]
 *     responses:
 *       200:
 *         description: Publicaciones obtenidas con éxito
 *       500:
 *         description: Error al obtener las publicaciones
 */
router.get('/', validarCampos, getPublications);

/**
 * @swagger
 * /publications/{id}:
 *   delete:
 *     summary: Eliminar una publicación
 *     tags: [Publications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la publicación a eliminar
 *     responses:
 *       200:
 *         description: Publicación eliminada con éxito
 *       403:
 *         description: No tienes permiso para eliminar esta publicación
 *       500:
 *         description: Error al eliminar la publicación
 */
router.delete('/:id', validarJWT, eliminarPublicacion, validarCampos, deletePublications);

export default router;