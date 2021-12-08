exports.getProof = 'select * from proof where challenge_uid = ?';

exports.insertProof = 'insert into proof(proof_content, proof_create_date, proof_image, challenge_uid, user_uid) values(?,?,?,?,?)';

exports.increaseProofCount = 'update challenge set proof_total_count = (proof_total_count + 1) where challenge_uid = ?';


exports.permitProof = 'update proof set proof_permit = "o" where challenge_uid = ? and user_uid = ?';