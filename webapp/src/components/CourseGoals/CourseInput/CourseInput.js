import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidInput(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValidInput(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValidInput ? "invalid" : ""}`}>
        {isValidInput ? (
          <label>To-do List Item</label>
        ) : (
          <label>Please fill the form and click on the add item button.</label>
        )}
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">
        <b>Add Item</b>
      </Button>
    </form>
  );
};

export default CourseInput;
