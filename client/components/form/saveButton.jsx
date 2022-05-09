import React from "react";
import { useDispatch } from "react-redux";
import { postPhone } from "../../redux/reducer/table";
import { resetInputValue } from "../../redux/reducer/input";

const date = () => {
  const now = new Date();
  const currentDate = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`
    .split(".")
    .map((it) => {
      if (it.length === 1) {
        return "0" + it;
      }
      return it;
    });
  return currentDate.join(".");
};

const SaveButton = (props) => {
  const dispatch = useDispatch();
  return (
    <button
      disabled={props.disabled}
      className={
        props.disabled ? "input__SaveButton--disabled" : "input__SaveButton"
      }
      onClick={() => {
        dispatch(postPhone({ phone: props.phone, date: date() }));
        dispatch(resetInputValue());
      }}
    >
      {props.text}
    </button>
  );
};

export default SaveButton;
