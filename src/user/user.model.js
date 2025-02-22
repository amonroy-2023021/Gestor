import {Schema, model} from 'mongoose';

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        maxLength: [25, 'No puede sobrepasar los 25 caracteres']
    },
    surname: {
        type: String,
        required: [true, "El apellido es obligatorio"],
        maxLength: [25, 'No puede sobrepasar los 25 caracteres']
    },
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    state: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false
});

UserSchema.methods.toJSON = function(){
    const { __v, password, _id, ...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
}

export default model('User', UserSchema);