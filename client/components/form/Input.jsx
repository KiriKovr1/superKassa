import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateSelectionVisiability } from "../../redux/reducer/input";
import CountryCodeSelection from "./countryCodeSelection";
import arrow from "../../assets/icons/button-arrow.svg";
import TextInput from "./textInput";
import SaveButton from "./saveButton";

const CountryCodeButton = (props) => {
  const dispatch = useDispatch();
  return (
    <button
      className="input__countryCodeButton"
      onClick={() => dispatch(updateSelectionVisiability())}
    >
      <span>
        <p className="countryCodeButton__text">{props.code}</p>
        <img
          src={arrow}
          alt="arrow"
          className={
            props.active
              ? "countryCodeButton__arrow--directionRight"
              : "countryCodeButton__arrow--directionDown"
          }
        />
      </span>
    </button>
  );
};

const Input = () => {
  const inputData = useSelector((s) => s.input);
  return (
    <div className={inputData.sendError ? "input--notValid" : "input"}>
      <CountryCodeButton
        code={inputData.activeCode}
        active={inputData.isCountryCodeSelection}
      />
      <TextInput />
      <SaveButton
        text="сохранить"
        disabled={!inputData.valid}
        phone={inputData.phone}
      />
      {inputData.isCountryCodeSelection && <CountryCodeSelection />}
    </div>
  );
};

export default Input;
