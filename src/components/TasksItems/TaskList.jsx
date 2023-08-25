import React from "react";
import { AnimatePresence } from "framer-motion";

import TaskItem from "./TaskItem";

function TaskList({ todos, onDelete }) {
  return (
    <ul className="flex flex-col gap-3">
      <AnimatePresence>
        {todos.length === 0 ? (
          <h1 className="text-center text-gray-400">Pretty empty here</h1>
        ) : (
          todos.map((todo) => (
            <TaskItem key={todo.id} todo={todo} onDelete={onDelete} />
          ))
        )}
      </AnimatePresence>
    </ul>
  );
}

export default TaskList;
