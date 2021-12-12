const mypageQuery = require('../queries/mypageQuery');
const db = require('../../database/database');

exports.myInfo = async (user_uid) => {
    
    try{
        let myInfo = await db.query(mypageQuery.myInfo, [user_uid])
        return myInfo[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.pcList = async (user_uid) => {
    
    try{
        let pcList = await db.query(mypageQuery.pcList, [user_uid])
        return pcList[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.ccList = async (user_uid) => {
    
    try{
        let ccList = await db.query(mypageQuery.ccList, [user_uid])
        return ccList[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.postList = async (user_uid) => {
    
    try{
        let postList = await db.query(mypageQuery.postList, [user_uid])
        return postList[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.updateMyInfo = async (email, interest, user_uid) => {
    
    try{
        let update = await db.query(mypageQuery.updateMyInfo, [email, interest, user_uid])
        return update[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.deleteMyInfo = async (user_uid) => {
    
    try{
        let deleteMyInfo = await db.query(mypageQuery.deleteMyInfo, [user_uid])
        return deleteMyInfo[0]
    } 
    
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}