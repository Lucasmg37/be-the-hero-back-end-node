const connection = require('../database/conection');

module.exports = {
    async create(request, response){
        const { name = null, email = null, whatsapp = null, city = null, uf = null } = request.body;

        let result = await connection('ongs')
        .insert({
            name,
            email,
            whatsapp,
            city,
            uf
        });
    
        return response.json(result);
    }
}