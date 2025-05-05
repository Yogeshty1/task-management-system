import express from 'express';
import { body } from 'express-validator';
import { register, login, getCurrentUser, updateUser, getAllUsers } from '../controllers/userController';
import { auth, checkRole } from '../middleware/auth';

const router = express.Router();

// Register route
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    body('name').notEmpty().withMessage('Name is required'),
    body('role')
      .isIn(['admin', 'manager', 'user'])
      .withMessage('Role must be either admin, manager, or user')
  ],
  register
);

// Login route
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').notEmpty().withMessage('Password is required')
  ],
  login
);

// Get current user route
router.get('/me', auth, getCurrentUser);

// Get all users route (only for managers and admins)
router.get('/', auth, checkRole(['admin', 'manager']), getAllUsers);

// Update user route
router.put(
  '/me',
  auth,
  [
    body('name').optional().notEmpty().withMessage('Name cannot be empty'),
    body('email').optional().isEmail().withMessage('Please enter a valid email')
  ],
  updateUser
);

export default router; 