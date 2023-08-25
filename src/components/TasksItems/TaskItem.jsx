import React from "react";
import { motion } from "framer-motion";

function TaskItem({ todo, onDelete }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, height: 0, overflow: "hidden" }}
      transition={{ duration: 0.6 }}
      className="flex gap-2"
    >
      <button
        onClick={() => onDelete(todo.id)}
        className="w-8 h-8 rounded-md border-2"
      ></button>
      <li className="w-full h-8 flex items-center">{todo.text}</li>
    </motion.div>
  );
}

export default TaskItem;
