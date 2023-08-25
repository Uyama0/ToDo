"use client";

import { useState } from "react";
import Image from "next/image";

import TodoList from "@/components/TasksItems/TaskList";
import Img from "@/assets/masterhead.png";

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
    <div className="h-[calc(100vh-48px)] flex justify-center flex-col">
      <Image
        src={Img}
        className="flex-1 -mb-5 pb-10 flex justify-start items-end text-3xl font-semibold"
      />
      <div className="h-2/3 bg-blue-300 rounded-t-3xl flex flex-col p-3">
        <div className="overflow-auto">
          <TodoList todos={todos} />
        </div>
        <div className="flex-grow"></div>
        {/* input */}
        <div className="flex gap-3 my-5">
          <input
            placeholder="what's next?"
            type="text"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            className="w-full h-full rounded-xl p-3"
          ></input>
          <div className="flex justify-end items-end">
            <button
              onClick={handleAddTodo}
              className="rounded-[50%] justify-center flex items-center h-full w-[45.6px] text-2xl   bg-white"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
