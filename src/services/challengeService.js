const challengeQuery = require('../queries/challengeQuery');
const database = require('../../database/database');


exports.getList = async(req) => {
    try{
        const rows = await database.query(challengeQuery.getList, req);
        return rows[0];
    }catch(err){
        return Error(err);
    }
}


exports.createChallenge = async(req) => {
    try{
        await database.query(challengeQuery.createChallenge, req);
        return
    }catch(err){
        return Error(err);
    }
}

exports.getChallengeId = async(req) => {
    try{
        const id = await database.query(challengeQuery.getChallengeId, req);
        console.log(id[0]);
        return id[0];
    }catch(err){
        return Error(err);
    }
}

exports.participate = async(req) => {
    try{
        await database.query(challengeQuery.participate, req);
        return
    }catch(err){
        console.log(err);
        return Error(err);
    }
}


exports.getChallenge = async(req) => {
    try{
        const challenge = await database.query(challengeQuery.getChallenge, req);
        return challenge[0];
    }catch(err){
        return Error(err);
    }
}