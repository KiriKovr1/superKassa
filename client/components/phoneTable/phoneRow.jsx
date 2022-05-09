import React from "react";
import DeleteRowButton from "./deleteRowButton";

const PhoneRow = (props) => {
  return (
      <div className="phoneRow" >
        <div>
          <p className="phoneText">{props.phone}</p>
        </div>
        <div>
          <p className="dateText">{props.date}</p>
        </div>
        <DeleteRowButton id={props.id} />
      </div>
  );
};

export default PhoneRow;
