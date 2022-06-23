const { Router } = require('express');
const { getTimeZones, getUserTimeZones, addTimeZone, deleteTimeZone } = require('../controllers/timezones.controller')
const { checkUserExistence } = require('../middlewares/checkUser');

const router = Router();

router.get('/', getTimeZones );
router.get('/user', checkUserExistence ,getUserTimeZones );
router.put('/', addTimeZone );
router.delete('/', deleteTimeZone );

module.exports = { router };