import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="flex items-center gap-4 bg-blue-500 px-4 py-2 rounded-lg sm:w-5/12"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <>
          <input
            ref={inputRef}
            type="text"
            value={editTodo}
            className="bg-transparent outline-none border-b border-black  flex-1"
            onChange={(e) => setEditTodo(e.target.value)}
          />
        </>
      ) : (
        <>
          {todo.isDone ? (
            <>
              <s className="flex-1">{todo.todo}</s>
            </>
          ) : (
            <>
              <h1 className="flex-1">{todo.todo}</h1>
            </>
          )}
        </>
      )}

      <div className="flex items-center gap-2">
        <AiFillEdit
          className="cursor-pointer"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        />
        <AiFillDelete
          className="cursor-pointer"
          onClick={() => handleDelete(todo.id)}
        />
        <MdOutlineDone
          className="cursor-pointer"
          onClick={() => handleDone(todo.id)}
        />
      </div>
    </form>
  );
};

export default SingleTodo;
