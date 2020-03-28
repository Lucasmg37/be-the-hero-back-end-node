const connection = require('../database/conection');

module.exports = {
    async create(request, response){
        const { email } = request.body;

        let ong = await connection('ongs').select().where('email', email).first();

        if (!ong) {
            return response.status(400).json();
        }

        return response.json(ong);
    },

}