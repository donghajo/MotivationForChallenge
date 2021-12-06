const challengeQuery = require('../queries/challengeQuery');
const database = require('../../database/database');

//리스트 조회
exports.getList = async(req) => {
    try{
        const rows = await database.query(challengeQuery.getList, req);
        return rows[0];
    }catch(err){
        return Error(err);
    }
}

//챌린지 개설
exports.createChallenge = async(req) => {
    try{
        await database.query(challengeQuery.createChallenge, req);
        return
    }catch(err){
        return Error(err);
    }
}

//생성시간으로 챌린지 id값 받아오기
exports.getChallengeId = async(req) => {
    try{
        const id = await database.query(challengeQuery.getChallengeId, req);
        return id[0];
    }catch(err){
        return Error(err);
    }
}

//챌린지 참여
exports.participate = async(req) => {
    try{
        await database.query(challengeQuery.participate, req);
        return
    }catch(err){
        console.log(err);
        return Error(err);
    }
}

//id값으로 챌린지 받아오기
exports.getChallenge = async(req) => {
    try{
        const challenge = await database.query(challengeQuery.getChallenge, req);
        return challenge[0];
    }catch(err){
        return Error(err);
    }
}