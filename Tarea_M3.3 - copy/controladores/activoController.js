const models = require('../models');
const mostrar = async (req, res) => {
    try {
        const activos = await models.Activo.findAll({
            include: [
                { 
                    model: models.Tag,  
                    through: 'ActivoTags',
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    through: { attributes: [] }
                }
            ],
            attributes: { exclude: ['createdAt', 'updatedAt'] },
                    through: { attributes: [] }
        });
        res.json(activos);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const buscarPorId = async (req, res) => {
    try {
        const activo = await models.Activo.findByPk(req.params.id);
        if (activo) {
            res.json(activo);
        } else {
            res.status(404).json({ error: 'Activo no encontrado' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
const buscarPorNumeroSerie = async (req, res) => {
    try {
        const numeroSerie = req.params.serie;
        const activo = await models.Activo.findOne({
            where: { numeroSerie: numeroSerie }
        });
        if (activo) {
            res.json(activo);
        } else {
            res.status(404).json({ error: 'Activo no encontrado' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
const actualizarActivo = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const activo = await models.Activo.findOne({ where: { activoId: id } });

        if (activo) {
            const { numeroSerie, numeroInventarioUABC, tipo, descripcion, ubicacion, responsable, imagen } = req.body;

            await activo.update({
                numeroSerie: numeroSerie,
                numeroInventarioUABC: numeroInventarioUABC,
                tipo: tipo,
                descripcion: descripcion,
                ubicacion: ubicacion,
                responsable: responsable,
                imagen: imagen
            });

            res.json(activo);
        } else {
            res.status(404).json({ error: 'Activo no encontrado' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const eliminarPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedActivo = await models.Activo.destroy({
            where: { activoId: id }
        });
        if (deletedActivo) {
            res.json({ message: 'Activo eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Activo no encontrado' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const agregarNuevoActivo = async (req, res) => {
    try {
        const nuevoActivo = await models.Activo.create(req.body);
        res.status(201).json(nuevoActivo);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateActivo = async (req, res) => {
    try {
        const id = req.params.id;
        const [updated] = await models.Activo.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedActivo = await models.Activo.findByPk(id);
            res.json(updatedActivo);
        } else {
            res.status(404).json({ error: 'Activo no encontrado' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// 导出所有处理程序
module.exports = {
    mostrar,
    buscarPorId,
    buscarPorNumeroSerie,
    eliminarPorId,
    actualizarActivo,
    agregarNuevoActivo,
    updateActivo
};


