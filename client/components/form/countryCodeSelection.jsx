import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getCodes,
  updateCountryCode,
  updateSelectionVisiability,
} from "../../redux/reducer/input";
import Loader from "../loader";

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
  const dispatch = useDispatch();
  const codes = useSelector((s) => s.input);

  if (!codes.data) {
    dispatch(getCodes());
  }

  return (
    <div className="countryCodeSelection">
      <p className="countryCodeSelection__title">выберете страну</p>
      <div className="countryCodeSelection__diviver"></div>
      {codes.data ? (
        codes.data.map((countryCode, index) => {
          return (
            <CountryCode
              country={countryCode.country}
              code={countryCode.code}
              key={`countryCode${index}`}
            />
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CountryCodeSelection;
