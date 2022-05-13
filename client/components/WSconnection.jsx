import React from "react";
import { useSelector } from "react-redux";

const WSconnect = () => {
  return (
    <div className="connected">
      <h3>вы подключены</h3>
    </div>
  );
};

const WSdisConnect = () => {
  return (
    <div className="disConnected">
      <h3>вы не подключены</h3>
      <p>попробуйте перезагрузить страницу</p>
    </div>
  );
};

const WSconnection = () => {
  const connected = useSelector((s) => s.connection.isConnected);
  return (
    <div className="connectionBG">
      {connected ? <WSconnect /> : <WSdisConnect />}
    </div>
  );
};

export default WSconnection;
