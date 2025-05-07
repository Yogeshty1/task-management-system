'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            <span className="block">Task Management</span>
            <span className="block text-indigo-600">Made Simple</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-sm sm:text-base md:text-lg text-gray-500">
            Organize your tasks, collaborate with your team, and boost productivity with our modern task management system.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            {user ? (
              <Link
                href="/dashboard"
                className="w-full sm:w-auto flex items-center justify-center px-6 py-2 sm:px-8 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Go to Dashboard
              </Link>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/login"
                  className="w-full sm:w-auto flex items-center justify-center px-6 py-2 sm:px-8 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="w-full sm:w-auto flex items-center justify-center px-6 py-2 sm:px-8 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-4 sm:px-6 pb-6 sm:pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-indigo-500 rounded-md shadow-lg">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="mt-6 sm:mt-8 text-base sm:text-lg font-medium text-gray-900 tracking-tight">Task Organization</h3>
                  <p className="mt-3 sm:mt-5 text-sm sm:text-base text-gray-500">
                    Create, organize, and track your tasks with ease. Set priorities, due dates, and assign tasks to team members.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-4 sm:px-6 pb-6 sm:pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-indigo-500 rounded-md shadow-lg">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 sm:mt-8 text-base sm:text-lg font-medium text-gray-900 tracking-tight">Team Collaboration</h3>
                  <p className="mt-3 sm:mt-5 text-sm sm:text-base text-gray-500">
                    Work together seamlessly. Assign tasks, track progress, and communicate with your team in real-time.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-4 sm:px-6 pb-6 sm:pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-indigo-500 rounded-md shadow-lg">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 sm:mt-8 text-base sm:text-lg font-medium text-gray-900 tracking-tight">Progress Tracking</h3>
                  <p className="mt-3 sm:mt-5 text-sm sm:text-base text-gray-500">
                    Monitor task progress, set deadlines, and get real-time updates on your team's productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
