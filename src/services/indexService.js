const indexQuery = require('../queries/indexQuery');
const database = require('../../database/database');


exports.getList = async(req) => {
    try{
        const rows = database.query(indexQuery.getList, req);
        return rows[0];
    }catch(err){
        return Error(err);
    }
}