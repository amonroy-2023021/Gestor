import { Router } from "express";
import { check } from "express-validator";
import { getUsers, updateUsers } from './user.controller.js'
import { onlyOneUser } from '../middleware/user-validator.js';
import { validarJWT } from '../middleware/jwt-validator.js';
import { validarCampos } from "../middleware/validar-campos.js";

const router = Router();

router.get("/", getUsers)

router.put(
    '/:id',validarJWT,onlyOneUser,validarCampos,updateUsers
)

export default router;
