import React, { useState } from "react";
import { v4 } from "uuid";
import { Task } from "../constants/arrTasks";

type Props = {
  setData: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks: Task[];
};

export const FormInsert = ({ setData, tasks }: Props) => {
  const [name, setName] = useState<string>("");

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      alert("Vui lòng nhập vào ô input!");
      return;
    }

    if (tasks.some((task) => task.name?.toLowerCase() === name.toLowerCase())) {
      alert("Task đã tồn tại");
      return;
    }

    const newTask = {
      name: name,
      completed: false,
      id: v4(),
    };

    tasks.unshift(newTask);
    setData([...tasks]);
    setName("");
  };

  return (
    <form onSubmit={(e) => add(e)}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => add}>Add</button>
    </form>
  );
};
