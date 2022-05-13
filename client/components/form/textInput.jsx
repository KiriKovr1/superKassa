import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { phoneValidation } from "../../config/form";

import { updatePhoneNumber, sendError } from "../../redux/reducer/input";


const TextInput = () => {
  const inputValue = useSelector((s) => s.input.inputValue);
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      value={inputValue}
      onBlur={() => {
        dispatch(sendError());
      }}
      onChange={(e) => {
        if (!Number.isNaN(+e.target.value)) {
          const { value } = e.target;
          dispatch(updatePhoneNumber(value, phoneValidation(value)));
        }
      }}
    />
  );
};

export default TextInput;
