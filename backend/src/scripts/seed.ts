import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from '../models/User';
import { Task } from '../models/Task';
import bcrypt from 'bcryptjs';

dotenv.config();

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/task-management');
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Task.deleteMany({});
    console.log('Cleared existing data');

    // Create test users
    const adminPassword = await bcrypt.hash('admin123', 10);
    const userPassword = await bcrypt.hash('user123', 10);

    const admin = await User.create({
      email: 'admin@example.com',
      password: adminPassword,
      name: 'Admin User',
      role: 'admin'
    });

    const manager = await User.create({
      email: 'manager@example.com',
      password: userPassword,
      name: 'Manager User',
      role: 'manager'
    });

    const user = await User.create({
      email: 'user@example.com',
      password: userPassword,
      name: 'Regular User',
      role: 'user'
    });

    console.log('Created test users');

    // Create test tasks
    const tasks = [
      {
        title: 'Implement user authentication',
        description: 'Set up JWT authentication and user registration',
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        priority: 'high',
        status: 'in-progress',
        createdBy: admin._id,
        assignedTo: manager._id
      },
      {
        title: 'Design database schema',
        description: 'Create MongoDB schemas for users and tasks',
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
        priority: 'medium',
        status: 'completed',
        createdBy: manager._id,
        assignedTo: user._id
      },
      {
        title: 'Write API documentation',
        description: 'Document all API endpoints and their usage',
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
        priority: 'low',
        status: 'todo',
        createdBy: admin._id,
        assignedTo: user._id
      }
    ];

    await Task.insertMany(tasks);
    console.log('Created test tasks');

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 