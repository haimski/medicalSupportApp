import React from 'react';
import { useDashboardStore } from './dashboardStore';

const symptomOptions = [
  'Fatigue',
  'Nausea',
  'Pain',
  'Hair loss',
  'Insomnia',
  'Loss of appetite',
];

const SymptomsChecklist = () => {
  const symptoms = useDashboardStore((state) => state.symptoms);
  const toggleSymptom = useDashboardStore((state) => state.toggleSymptom);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Symptoms</h2>
      <div className="grid grid-cols-2 gap-2">
        {symptomOptions.map((symptom) => (
          <label key={symptom} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={symptoms.includes(symptom)}
              onChange={() => toggleSymptom(symptom)}
              className="accent-pink-500"
            />
            {symptom}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SymptomsChecklist;
