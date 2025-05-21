import React from 'react';
import { useDashboardStore } from './dashboardStore';

const TasksList = () => {
  const tasks = useDashboardStore((state) => state.tasks);
  const toggleTask = useDashboardStore((state) => state.toggleTask);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Care Tasks</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              className="accent-pink-500"
            />
            <span className={task.done ? 'line-through text-gray-400' : ''}>
              {task.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
