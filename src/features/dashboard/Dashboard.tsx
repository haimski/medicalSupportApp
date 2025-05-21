import React, { use } from 'react';
import useScrollToTop from '../../utils/useScrollToTop';
import MoodTracker from './MoodTracker';
import SymptomsChecklist from './SymptomsChecklist';
import TasksList from './TasksList';

const Dashboard = () => {
    useScrollToTop();
    
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-screen-md mx-auto bg-white p-6 rounded-xl shadow space-y-6">
        <h1 className="text-2xl font-semibold">Patient Dashboard</h1>

        <div className="bg-yellow-100 text-yellow-900 px-4 py-3 rounded shadow">
          📩 New message from your care team
        </div>

        <MoodTracker />
        <SymptomsChecklist />
        <TasksList />
      </div>
    </div>
  );
};

export default Dashboard;
