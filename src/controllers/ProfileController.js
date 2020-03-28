const connection = require('../database/conection');

module.exports = {

    async index(request, response){
        let ong_id = 1;
        let incidents = await connection('incidents').select('*').where('ong_id', ong_id);
        return response.json(incidents);
    },
  
}