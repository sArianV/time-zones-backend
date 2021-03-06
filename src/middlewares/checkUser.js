const { db, COLLECTIONS } = require("../db/firebase-db")
const { uuid } = require('uuidv4');

const checkUserExistence = async (req, res, next) => {
    const { user_id } = req.query
    let new_id

    if (!user_id) {
        new_id = uuid()
        const res = await db.collection(COLLECTIONS.users).doc(new_id).set({
            user_time_zones: []
        })
    } else {
        const usersRef = db.collection(COLLECTIONS.users).doc(user_id);
        const doc = await usersRef.get();
        
        if (!doc.exists) {
            const res = await db.collection(COLLECTIONS.users).doc(user_id).set({
                user_time_zones: []
            })
        } 
    }

    req.user_id = new_id || user_id

    next()
}

module.exports = { checkUserExistence }