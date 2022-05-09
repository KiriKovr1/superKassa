import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { updatePhoneNumber, sendError } from "../../redux/reducer/input";

const phoneValidation = (str) => {
  const re = /^\d{3,10}$/gm;
  return re.test(str);
};

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
        if (!isNaN(+e.target.value)) {
          const value = e.target.value;
          dispatch(updatePhoneNumber(value, phoneValidation(value)));
        }
      }}
    />
  );
};

export default TextInput;
