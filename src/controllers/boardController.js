const boardService = require('../services/boardService');


exports.getBoard = async(req, res) =>{
    const session = req.session.user_uid;
    try{
        return res.render('board',{
            session:session
        })
    }catch(err){
        return res.status(500).json(err);
    }
}