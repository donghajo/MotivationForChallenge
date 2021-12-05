const signQuery = require('../queries/signQuery');
const database = require('../../database/database');

exports.signUp = async(req)=>{
    try{
        database.query(signQuery.signUp, req);
        return;
    }catch(err){
        throw Error(err);
    }
}

exports.signIn = async(req) => {
    try{
        const user = await database.query(signQuery.signIn, req);
        return user[0];
    }catch(err){
        throw Error(err);
    }
}