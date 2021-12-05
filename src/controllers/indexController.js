

exports.getMain = async(req, res) =>{
    console.log(req.session);
    try{
        const session = req.session.user_id;
        return res.render('category',{
            session:session
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

