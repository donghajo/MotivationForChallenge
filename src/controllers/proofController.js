const proofService = require('../services/proofService');


exports.getProof = async(req, res) => {
    const session = req.session.user_uid;
    try{
        return res.render('proof', {
            session: session
        });
    }catch(err){
        return res.status(500).json(err);
    }
}