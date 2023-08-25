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
    <div className="h-screen flex justify-center flex-col">
      <div className="relative w-full">
        <Image
          src={Img}
          alt="masterhead"
          priority
          className="absolute w-full -z-10"
        />
      </div>
      <div className="flex justify-center items-end h-screen ">
        <div className="w-full h-[61%] md:h-[46%] border-2 bg-white rounded-t-3xl flex flex-col p-3">
          <div className="overflow-auto ">
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
              className="w-full h-full rounded-xl p-3 border-[1px]"
            />
            <div className="flex justify-end items-end">
              <button
                onClick={handleAddTodo}
                className="rounded-[50%] justify-center text-white flex items-center h-full w-[45.6px] text-2xl bg-blue-500"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
