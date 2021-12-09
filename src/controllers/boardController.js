const boardService = require('../services/boardService');


exports.getBoard = async(req, res) =>{
    const session = req.session.user_uid;
    const { challenge_uid } = req.params
    try{
        let board_info = await boardService.getBoard(challenge_uid)
        return res.render('index',{
            session:session,
            board_info:board_info,
            challenge_uid:challenge_uid,
            pages: 'board'
        })
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.addPostPage = async(req, res) =>{
    const session = req.session.user_uid;
    const {challenge_uid} = req.params
    try{
        return res.render('index',{
            session:session,
            challenge_uid:challenge_uid,
            pages: 'insertPost'
        })
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.addPost = async(req, res) =>{
    const session = req.session.user_uid;
    const {challenge_uid} = req.params
    console.log(challenge_uid);
    const {post_title, post_content} = req.body
    const post_image = `${req.file.filename}`;
    try{
        let post_create_date = new Date();
        await boardService.addPost(post_title, post_content, post_image, post_create_date, challenge_uid, session)
        return res.redirect('/challenge/'+challenge_uid+'/board')
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.postDetail = async(req, res) =>{
    const session = req.session.user_uid;
    const { challenge_uid, post_uid } = req.params
    try{
        let detail_info = await boardService.postDetail(challenge_uid, post_uid)
        let comments = await boardService.getComment([post_uid]);
        console.log(comments[0]);
        return res.render('index',{
            session:session,
            detail_info:detail_info,
            challenge_uid:challenge_uid,
            comments:comments,
            pages: 'post'
        })
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.addComment = async(req, res) =>{
    const session = req.session.user_uid;
    const { challenge_uid, post_uid } = req.params
    const { comment_content } = req.body
    try{
        let comment_create_date = new Date();
        await boardService.addComment(comment_content, comment_create_date, post_uid, session)
        return res.redirect('/challenge/'+challenge_uid+'/board/'+post_uid)
    }catch(err){
        return res.status(500).json(err);
    }
}