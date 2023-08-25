import React from "react";

import TaskItem from "@/components/TasksItems/TaskItem";

function TaskList({ todos }) {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => {
        <TaskItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}

export default TaskList;
