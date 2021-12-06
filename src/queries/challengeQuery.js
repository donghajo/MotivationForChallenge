exports.getList = 'select * from challenge where type = ?';
exports.getChallengeId = 'select * from challenge where create_date = ?';
exports.getChallenge = 'select * from challenge where id = ?';

exports.createChallenge = 'insert into challenge(type, name, founder, start_date, end_date, content, proof_content, create_date, image) values(?,?,?,?,?,?,?,?,?)';
exports.participate = 'insert into challenger values(?,?,?)';