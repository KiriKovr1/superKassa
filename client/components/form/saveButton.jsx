import React from "react";
import { useDispatch } from "react-redux";

import { postPhone } from "../../redux/reducer/table";
import { resetInputValue } from "../../redux/reducer/input";
import { getDate } from "../../config/form";

const SaveButton = (props) => {
  const dispatch = useDispatch();
  const phoneData = {
    phone: props.phone,
    date: getDate(),
  };
  return (
    <button
      disabled={props.disabled}
      className={
        props.disabled ? "input__SaveButton--disabled" : "input__SaveButton"
      }
      onClick={() => {
        dispatch(postPhone(phoneData));
        dispatch(resetInputValue());
      }}
    >
      {props.text}
    </button>
  );
};

export default SaveButton;
