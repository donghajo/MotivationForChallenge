const boardQuery = require('../queries/boardQuery');
const db = require('../../database/database');


exports.getBoard = async(challenge_uid) => {
    try{
        let board = await db.query(boardQuery.getBoard, [challenge_uid]);
        return board[0]
    }catch(err){
        return Error(err)
    }
}

exports.addPost = async(post_title, post_content, post_image, post_create_date, challenge_uid, session) => {
    try{
        let addPost = await db.query(boardQuery.addPost, [post_title, post_content, post_image, post_create_date, challenge_uid, session]);
        return addPost[0]
    }catch(err){
        return Error(err)
    }
}

exports.
postDetail = async(challenge_uid, post_uid) => {
    try{
        let detail = await db.query(boardQuery.postDetail, [challenge_uid, post_uid]);
        return detail[0]
    }catch(err){
        return Error(err)
    }
}

exports.addComment = async(comment_content, comment_create_date, post_uid, session) => {
    try{
        let addComment = await db.query(boardQuery.addComment, [comment_content, comment_create_date, post_uid, session]);
        return addComment[0]
    }catch(err){
        return Error(err)
    }
}

exports.getComment = async(req)=>{
    try{
        const comments = await db.query(boardQuery.getComment, req);
        return comments[0];
    }catch(err){
        return Error(err);
    }
}