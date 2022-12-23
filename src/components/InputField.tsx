import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e : React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="bg-white px-4 py-2 rounded-xl" onSubmit={handleAdd}>
      <input
        placeholder="Enter Todo"
        className="border-none outline-none"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="ml-2">
        GO
      </button>
    </form>
  );
};

export default InputField;
