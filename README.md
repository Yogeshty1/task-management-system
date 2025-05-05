# Task Management System

A full-stack task management application built with Next.js, Node.js, and MongoDB.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technical Approach](#technical-approach)
- [Setup Instructions](#setup-instructions)
- [Architecture](#architecture)
- [Assumptions and Trade-offs](#assumptions-and-trade-offs)
- [Deployment](#deployment)

## Overview

This is a task management system that allows users to create, assign, and track tasks. The system implements role-based access control with three user roles: Admin, Manager, and User.

## Features

### User Management
- User registration and authentication
- Role-based access control
- Profile management
- Team member management

### Task Management
- Create, read, update, and delete tasks
- Assign tasks to team members
- Track task status
- Set task priorities
- Add task descriptions and due dates

### Role-Based Permissions
1. **Admin**
   - Full system access
   - Manage all users and tasks
   - Assign tasks to any user

2. **Manager**
   - View and manage team members
   - Create and assign tasks
   - View all team tasks

3. **User**
   - View assigned tasks
   - Update task status
   - Create tasks (auto-assigned)

## Technical Approach

### Frontend
1. **Next.js 14**
   - Server-side rendering for better performance
   - File-based routing
   - API routes for backend communication
   - TypeScript for type safety

2. **State Management**
   - React Context for global state
   - Local state for component-specific data
   - Form handling with React Hook Form

3. **UI/UX**
   - Tailwind CSS for styling
   - Responsive design
   - Modern and intuitive interface

### Backend
1. **Node.js with Express**
   - RESTful API design
   - Middleware for authentication
   - Error handling
   - Input validation

2. **Database**
   - MongoDB for flexible data storage
   - Mongoose for schema validation
   - Indexed queries for performance

3. **Security**
   - JWT authentication
   - Password hashing
   - Role-based middleware
   - CORS protection

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Local Development

1. **Clone the repository**
```bash
git clone <repository-url>
cd task-management-system
```

2. **Install dependencies**
```bash
# Install all dependencies (frontend, backend, and root)
npm run install-all
```

3. **Environment Setup**
Create `.env` files in both frontend and backend directories:

Backend (.env):
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Frontend (.env):
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

4. **Start development servers**
```bash
# Start both frontend and backend
npm run dev
```

5. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Architecture

### Frontend Structure
```
frontend/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable components
│   ├── contexts/         # React contexts
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
```

### Backend Structure
```
backend/
├── src/
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   └── utils/          # Utility functions
```

## Assumptions and Trade-offs

### Assumptions
1. **User Management**
   - Users have unique email addresses
   - Passwords meet minimum security requirements
   - User roles are predefined and fixed

2. **Task Management**
   - Tasks have a single assignee
   - Tasks have basic metadata (title, description, status)
   - Task status follows a predefined workflow

3. **Performance**
   - Moderate number of concurrent users
   - Reasonable number of tasks per user
   - Standard database query patterns

### Trade-offs

1. **Architecture**
   - Chose REST over GraphQL for simpler implementation
   - Used MongoDB for flexibility over strict schema
   - Implemented server-side rendering for better SEO

2. **Security**
   - JWT tokens for stateless authentication
   - Basic password requirements
   - Role-based access control

3. **Performance**
   - No real-time updates (polling instead)
   - Basic caching strategy
   - Standard database indexing

4. **Scalability**
   - Vertical scaling approach
   - Basic load balancing
   - Standard database sharding

## Deployment

### Vercel Deployment

1. **Create a Vercel Account**
   - Go to https://vercel.com
   - Sign up with your GitHub account

2. **Deploy Backend**
   - Create a new project in Vercel
   - Connect your GitHub repository
   - Configure the backend:
     ```bash
     # Root Directory: backend
     # Build Command: npm install && npm run build
     # Output Directory: dist
     # Install Command: npm install
     ```

3. **Deploy Frontend**
   - Create another project in Vercel
   - Connect the same GitHub repository
   - Configure the frontend:
     ```bash
     # Root Directory: frontend
     # Build Command: npm install && npm run build
     # Output Directory: .next
     # Install Command: npm install
     ```

4. **Environment Variables**
   Set up in Vercel dashboard for both projects:

   Backend:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

   Frontend:
   ```
   NEXT_PUBLIC_API_URL=your_backend_url
   ```

### Free Tier Benefits

1. **Vercel Free Tier Includes**:
   - 100GB bandwidth/month
   - Serverless functions
   - Automatic HTTPS
   - Continuous deployment
   - Team collaboration
   - No credit card required

2. **Limitations**:
   - Serverless functions have execution time limits
   - Limited bandwidth
   - Shared resources

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 