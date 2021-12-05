

exports.getMain = async(req, res) =>{
    console.log(req.session);
    try{
        const session = req.session.user_id;
        const nickname = req.session.nickname;
        return res.render('category',{
            session:session,
            nickname:nickname
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

