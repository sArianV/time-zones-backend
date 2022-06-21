import { Router } from 'express';
import { getTimeZones, getUserTimeZones } from '../controllers/timezones.controller'

const router = Router();

router.get('/', getTimeZones );
router.get('/user/:id', getUserTimeZones );

export default router;
