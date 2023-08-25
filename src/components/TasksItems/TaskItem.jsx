import React from "react";

function TaskItem({ todo }) {
  return <li className="p-3 w-full rounded-3xl bg-white">{todo.text}</li>;
}

export default TaskItem;
