import User from "../user/user.model.js"
import Publication from "../publications/publication.model.js"


export const eliminarPublicacion = async(req, res, next) => {
    const { id } = req.params;
    const authenticatedUser = req.user.id;

    try {
        const publi = await Publication.findById(id);

        if (publi.titular.toString() !== authenticatedUser.toString()) {
            return res.status(403).json({
                success: false,
                msg: "No tienes permiso para eliminar esta publicación"
            });
        }
        next()

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Error al eliminar la publicacion"
        })
    }
}