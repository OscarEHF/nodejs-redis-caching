import { Router } from 'express';

const router = Router();

import {
  characters,
  character
} from '../controllers/characters.controllers.js';

router.get('/', characters);
router.get('/:id', character);

export default router;