export interface Task {
  id: number | string;
  name: string | undefined;
  completed: boolean;
}

export const arrTasks: Task[] = [
  { id: 1, name: "ăn tối", completed: false },
  { id: 3, name: "ngủ trưa", completed: false },
  { id: 4, name: "học React", completed: true },
  { id: 10, name: "Viết code TypeScript", completed: false },
];
