import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button value={props.value}>{props.text}</button>
    </>
  );
};

export default OperatorButton;