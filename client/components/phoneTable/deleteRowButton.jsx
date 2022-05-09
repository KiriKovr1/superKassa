import React from "react";
import { useDispatch } from "react-redux";
import { deletePhone } from "../../redux/reducer/table";
import deleteIconBody from "../../assets/icons/delete-icon-body.svg";
import deleteIconHead from "../../assets/icons/delete-icon-head.svg";

const DeleteRowButton = (props) => {
  const dispatch = useDispatch();
  return (
    <button className="DeleteRowButton" onClick={() => dispatch(deletePhone(props.id))}>
      <span>
        <img className="deleteRowButton__head" src={deleteIconHead} />
        <img className="deleteRowButton__body" src={deleteIconBody} />
      </span>
    </button>
  );
};

export default DeleteRowButton;
