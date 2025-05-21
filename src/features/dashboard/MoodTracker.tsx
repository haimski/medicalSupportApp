import React from 'react';
import { useDashboardStore } from './dashboardStore';

const moodOptions = [
  { label: '😊 Happy', value: 'happy' },
  { label: '😐 Neutral', value: 'neutral' },
  { label: '😢 Sad', value: 'sad' },
];

const MoodTracker = () => {
  const mood = useDashboardStore((state) => state.mood);
  const setMood = useDashboardStore((state) => state.setMood);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Daily Mood</h2>
      <div className="flex gap-4">
        {moodOptions.map((option: any) => (
          <button
            key={option.value}
            onClick={() => setMood(option.value)}
            className={`px-4 py-2 rounded-xl border text-xl transition ${
              mood === option.value
                ? 'bg-pink-200 border-pink-500'
                : 'bg-white border-gray-300 hover:bg-gray-50'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;
