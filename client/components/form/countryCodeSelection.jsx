import React from "react";
import { useDispatch } from "react-redux";

import config from "../../../server/config";

import {
  updateCountryCode,
  updateSelectionVisiability,
} from "../../redux/reducer/input";

const CountryCode = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      className="countryCodeSelection__countryCode"
      role="button"
      onClick={() => {
        dispatch(updateCountryCode(props.code));
        dispatch(updateSelectionVisiability());
      }}
    >
      <div>{props.country}</div>
      <div>{props.code}</div>
    </div>
  );
};

const CountryCodeSelection = () => {
  return (
    <div className="countryCodeSelection">
      <p className="countryCodeSelection__title">выберете страну</p>
      <div className="countryCodeSelection__diviver" />
      {config.app.countryCodes.map((countryCode, index) => {
          return (
            <CountryCode
              country={countryCode.country}
              code={countryCode.code}
              key={`countryCode${index}`}
            />
          );
        })
      }
    </div>
  );
};

export default CountryCodeSelection;
