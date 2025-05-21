import { create } from 'zustand';

type Mood = 'happy' | 'neutral' | 'sad';

interface Task {
    id: string;
    label: string;
    done: boolean;
}

interface DashboardState {
  mood: Mood | null;
  setMood: (mood: Mood) => void;

  symptoms: string[];
  toggleSymptom: (symptom: string) => void;

  tasks: Task[];
  toggleTask: (id: string) => void;
}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  mood: null,
  setMood: (mood) => set({ mood }),
  symptoms: [],
  toggleSymptom: (symptom) => {
    const current = get().symptoms;
    const exists = current.includes(symptom);
    set({
      symptoms: exists
        ? current.filter((s) => s !== symptom)
        : [...current, symptom],
    });
  },

  tasks: [
    { id: '1', label: 'Take morning medication', done: false },
    { id: '2', label: 'Log today’s mood', done: false },
    { id: '3', label: '30-min walk outside', done: false },
  ],
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    })),
}));
