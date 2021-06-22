import React from "react";

const ToDoList = ({ list, doDelete, doChange, title, doClear, className }) => {
  return (
    <div className="todo-list">
      <h3>
        {title}{" "}
        <button className="btn-red" onClick={doClear}>
          Clear all
        </button>
      </h3>
      <ul className="list">
        {list.map((li) => (
          <li key={li.id} className={className}>
            <div>
              <input
                type="checkbox"
                onClick={() => doChange(li.id)}
                defaultChecked={li.checked}
              />
              <span>{li.value}</span>
            </div>
            <button className="btn-red" onClick={() => doDelete(li.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
