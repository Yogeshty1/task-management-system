import express from 'express';
import { body } from 'express-validator';
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  getUserTasks
} from '../controllers/taskController';
import { auth } from '../middleware/auth';

const router = express.Router();

// All routes are protected
router.use(auth);

// Create task route
router.post(
  '/',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('dueDate').isISO8601().withMessage('Invalid due date'),
    body('priority').isIn(['low', 'medium', 'high']).withMessage('Invalid priority'),
    body('assignedTo').isMongoId().withMessage('Invalid user ID')
  ],
  createTask
);

// Get all tasks route
router.get('/', getTasks);

// Get user's tasks route
router.get('/my-tasks', getUserTasks);

// Get task by ID route
router.get('/:id', getTaskById);

// Update task route
router.put(
  '/:id',
  [
    body('title').optional().notEmpty().withMessage('Title cannot be empty'),
    body('description').optional().notEmpty().withMessage('Description cannot be empty'),
    body('dueDate').optional().isISO8601().withMessage('Invalid due date'),
    body('priority').optional().isIn(['low', 'medium', 'high']).withMessage('Invalid priority'),
    body('status').optional().isIn(['todo', 'in-progress', 'completed']).withMessage('Invalid status'),
    body('assignedTo').optional().isMongoId().withMessage('Invalid user ID')
  ],
  updateTask
);

// Delete task route
router.delete('/:id', deleteTask);

export default router; 