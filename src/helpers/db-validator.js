import Usuario from '../user/user.model.js'

export const existenteEmail = async (correo = '') => {
    const existeEmail = await Usuario.findOne({correo});

    if(existeEmail){
        throw new Error(`El correo ${correo} ya existe en la base de datos`)
    }
}

export const existeUsuarioById = async (id = '') => {
    const existeUsuario = await Usuario.findById(id);

    if(!existeUsuario){
        throw new Error(`El usuario con el id ${id} no existe en la base de datos`)
    }
}