import React, { useEffect, useState } from "react";
import { task } from "../constants/arrTasks";

type Props = {
  tasks: task[];
  setTasks: React.Dispatch<React.SetStateAction<task[]>>;
};

const TasksList = ({ tasks, setTasks }: Props) => {
  const [currentEdit, setCurrentEdit] = useState<number>(-1);
  const [nameEdit, setNameEdit] = useState<string>();

  useEffect(() => {
    if (currentEdit >= 0) {
      setNameEdit(tasks[currentEdit].name);
    }
  }, [currentEdit, tasks]);

  const deleteTask = (index: number) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  const toggleCompleted = (index: number) => {
    tasks[index].completed = !tasks[index].completed;

    setTasks([...tasks]);
  };

  const saveTask = () => {
    tasks[currentEdit].name = nameEdit;
    setTasks([...tasks]);
    setCurrentEdit(-1);
  };

  return (
    <div className="list-task">
      {!tasks.length && (
        <div className="no-task">Bạn không có công việc nào</div>
      )}

      {tasks.length >= 8 && (
        <div className="over-task">Bạn đang có {tasks.length} công việc!</div>
      )}

      {tasks.map((task, index) => (
        <p key={index} className="item-task">
          <span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(index)}
            />

            {index === currentEdit ? (
              <>
                <input
                  type="text"
                  value={nameEdit}
                  onChange={(e) => setNameEdit(e.target.value)}
                />
                <button onClick={saveTask}>save</button>
              </>
            ) : (
              <label
                className={task.completed ? "completed" : ""}
                onClick={() => setCurrentEdit(index)}
              >
                {task.name}
              </label>
            )}
          </span>
          <button className="btn-delete" onClick={() => deleteTask(index)}>
            X
          </button>
        </p>
      ))}
    </div>
  );
};

export default TasksList;
