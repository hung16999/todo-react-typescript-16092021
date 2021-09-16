export interface task {
  name: string | undefined;
  completed: boolean;
}

export const arrTasks: task[] = [
  { name: "ăn tối", completed: false },
  { name: "ngủ trưa", completed: false },
  { name: "học React", completed: true },
  { name: "Viết code TypeScript", completed: false },
  { name: "Đi bộ", completed: true },
];
