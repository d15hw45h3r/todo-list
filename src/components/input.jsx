import React from "react";

const Input = ({ doChange, doSubmit, inputRef }) => {
  return (
    <>
      <form onSubmit={doSubmit} className="form">
        <input
          placeholder="to-do"
          type="text"
          onChange={doChange}
          ref={inputRef}
        />
        <button type="submit" onSubmit={doSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Input;
