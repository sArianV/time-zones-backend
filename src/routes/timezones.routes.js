import { Router } from 'express';
import { getTimeZones, getUserTimeZones, addTimeZone, deleteTimeZone } from '../controllers/timezones.controller'
import { checkUserExistence } from '../middlewares/checkUser';

const router = Router();

router.get('/', getTimeZones );
router.get('/user', checkUserExistence ,getUserTimeZones );
router.put('/', addTimeZone );
router.delete('/', deleteTimeZone );
export default router;