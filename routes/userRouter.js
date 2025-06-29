import { Router } from 'express';
import { getApplicationStats, getCurrentUser, updateUser } from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import { authorizePermissions } from '../middleware/authMiddleware.js';
import { USER_ROLES } from '../utils/constants.js';
import upload from '../middleware/multerMiddleware.js';

const router = Router();

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', [authorizePermissions(USER_ROLES.ADMIN), getApplicationStats]);
router.patch('/update-user', upload.single('avatar'), validateUpdateUserInput, updateUser);

export default router;
