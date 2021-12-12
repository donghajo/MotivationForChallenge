const proofQuery = require('../queries/proofQuery');
const database = require('../../database/database');

exports.getProof = async(req, res) => {
    try{
        const proof = await database.query(proofQuery.getProof, req);
        return proof[0];
    }catch(err){
        return Error(err);
    }
}

exports.insertProof = async(req,res)=>{
    try{
        await database.query(proofQuery.insertProof, req);
        await database.query(proofQuery.increaseProofCount, req[3]);
        return;
    }catch(err){
        return Error(err);
    }
}

exports.permitProof = async(req, res) => {
    try{
        await database.query(proofQuery.permitProof, req);
        return;
    }catch(err){
        return Error(err);
    }
}