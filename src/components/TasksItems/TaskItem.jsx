import React from "react";

function Task({todo}) {
  return <li className="p-3 w-full bg-white">{todo.text}</li>;
}

export default Task;
