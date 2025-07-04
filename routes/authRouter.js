import { Router } from 'express';
const router = Router();

import { login, logout, register } from '../controllers/authController.js';
import { validateLoginInput, validateRegisterInput } from '../middleware/validationMiddleware.js';
import rateLimiter from 'express-rate-limit';

const TIMEOUT_MIN = 15;
const apiLimiter = rateLimiter({
  windowMs: TIMEOUT_MIN * 60 * 1000,
  max: 10,
  message: { msg: `IP rate limit exceeded, retry in ${TIMEOUT_MIN} minutes` },
});

router.post('/register', apiLimiter, validateRegisterInput, register);
router.post('/login', apiLimiter, validateLoginInput, login);
router.get('/logout', logout);

export default router;
