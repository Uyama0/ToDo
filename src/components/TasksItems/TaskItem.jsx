import React from "react";

function TaskItem({ todo }) {
  return (
    <li className="p-3 w-full rounded-3xl border-[1px] border-gray-400">
      {todo.text}
    </li>
  );
}

export default TaskItem;
