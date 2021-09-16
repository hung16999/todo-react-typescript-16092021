import React, { useState } from "react";
import { task } from "../constants/arrTasks";

type Props = {
  setData: React.Dispatch<React.SetStateAction<task[]>>;
  tasks: task[];
};

const FormInsert = ({ setData, tasks }: Props) => {
  const [name, setName] = useState<string>("");

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      alert("Vui lòng nhập vào ô input!");
      return;
    }

    const newTask = {
      name: name,
      completed: false,
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

export default FormInsert;
