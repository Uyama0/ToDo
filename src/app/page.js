"use client";

import { useState } from "react";

import TodoList from "@/components/TasksItems/TaskList";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  return (
    <div className="h-[calc(100vh-48px)] flex justify-center flex-col bg-cyan-50">
      <div className="flex-1 flex justify-center items-end p-3 text-3xl font-semibold">
        Hello Uyama
      </div>
      <div className="h-2/3 bg-blue-300 rounded-t-3xl p-3">
        <div>hi</div>
        <TodoList todos={todos} />

        {/* input */}
        <div className="flex gap-3">
          <input
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            type="text"
            className="w-full h-full rounded-3xl p-3"
          ></input>
          <div className="flex justify-end items-end">
            <button
              onClick={handleAddTodo}
              className="rounded-[50%] justify-center flex items-center h-full w-[45.6px] bg-white text-2xl"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
