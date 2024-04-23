const models = require('./models');

async function mostrarActivosYTags() {
    try {
        let activos = await models.Activo.findAll();
        for (let activo of activos) {
            console.log("Activo:");
            console.log(activo.toJSON());

            let tagsAsociados = await activo.getTags();

            console.log("Tags asociados al activo:");
            tagsAsociados.forEach(tag => {
                console.log(tag.toJSON());
            });
        }

        let tags = await models.Tag.findAll();
        for (let tag of tags) {
            console.log("Tag:");
            console.log(tag.toJSON());

            let activosAsociados = await tag.getActivos();

            console.log("Activos asociados al tag:");
            activosAsociados.forEach(activo => {
                console.log(activo.toJSON());
            });
        }
        await models.sequelize.close();
    } catch (error) {
        console.error("Error:", error);
    }
}

mostrarActivosYTags();
