const challengeQuery = require('../queries/challengeQuery');
const database = require('../../database/database');

exports.getMyChallenge = async(req)=> {
    try{
        const challenge = await database.query(challengeQuery.getMyChallenge, req);
        return challenge[0];
    }catch(err){
        return Error(err);
    }
}
