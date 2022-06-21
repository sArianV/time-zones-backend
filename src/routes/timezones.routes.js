import { Router } from 'express';
import { getTimeZones } from '../controllers/timezones.controller'

const router = Router();

router.get('/', getTimeZones );

export default router;
