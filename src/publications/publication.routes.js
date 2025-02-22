import { Router } from 'express';
import { savePublication, getPublications, deletePublications } from './publication.controller.js';
import { validarCampos } from '../middleware/validar-campos.js';
import { validarJWT } from "../middleware/jwt-validator.js";
import { eliminarPublicacion } from '../middleware/publications-validator.js';

const router = Router();

router.post(
    '/submit', validarJWT, validarCampos,savePublication)

router.get(
    '/', validarCampos, getPublications )

router.delete(
    '/:id', validarJWT, eliminarPublicacion, validarCampos, deletePublications  )

export default router;