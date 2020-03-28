const connection = require('../database/conection');

module.exports = {
    async create(request, response){
        const { title = null, description = null, value = null } = request.body;

        let result = await connection('incidents')
        .insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json(result);
    },

    async index(request, response){
        const {page = 1} = request.query;

        let [count] = await connection('incidents').count();
        let incidents = await connection('incidents')
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.city', 'ongs.uf', 'ongs.whatsapp'])
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5);

        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidents);
    },

    async delete(request, response){
        const { id } = request.params;

        //Vou usar JWT para buscar ong logada

        const incident = await connection('incidents').select('ong_id').where('id', id).first();
        //response.status(401).json()

        await connection('incidents').delete().where('id', id);
        return response.status(204).send();

    }


}