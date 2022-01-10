import React, { useState } from "react";

export const AddTodo = ({ pagehead, addTodo }) => {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const submit = (e) => {
      e.preventDefault();
      if (!title) {
          alert("Please enter the name");
        }
        addTodo(title);
        let newText = "";
        setTitle(newText);
    };

  return (
    <div>
      <div className="container">
        <h3 className="text-center py-3">{pagehead}</h3>
        <form onSubmit={submit}>
          <div className="mb-3 d-flex justify-content-center">
            <input
              type="text"
              className="form-control w-50 mx-2"
              id="title"
              placeholder="Add Item"
              value={title}
              onChange={handleOnChange}
            />
            <button
              type="submit"
              className="btn btn-success mx-2"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
