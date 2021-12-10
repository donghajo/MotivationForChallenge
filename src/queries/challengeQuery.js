exports.getList = 'select * from challenge where challenge_type = ?';
exports.getChallengeId = 'select * from challenge where challenge_create_date = ?';
exports.getChallenge = 'select * from challenge where challenge_uid = ?';
exports.getMyChallenge = 'select * from challenger where user_uid = ?'

exports.createChallenge = 'insert into challenge(challenge_type, challenge_title, challenge_creator, challenge_start_date, challenge_end_date, challenge_content, proof_default, challenge_create_date, challenge_image) values(?,?,?,?,?,?,?,?,?)';
exports.participate = 'insert into challenger(challenge_uid, user_uid, participation_date) values(?,?,?)';
exports.increaseChallenger = 'update challenge set challenger_count = (challenger_count + 1) where challenge_uid = ?';

//중복참여제한
exports.existence = 'select * from challenger(challenge_uid, user_uid) where challenge_uid = ? and user_uid = ?'