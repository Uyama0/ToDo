import React from "react";

import TaskItem from "./TaskItem";

function TaskList({ todos }) {
  console.log(todos);
  return (
    <ul className="flex flex-col gap-3">
      {todos.map((todo) => (
        <TaskItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TaskList;
