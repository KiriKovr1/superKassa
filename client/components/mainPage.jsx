import React from "react";

import Form from "./form/form";
import PhoneTable from "./phoneTable/phoneTable";
import WSconnection from "./WSconnection";

const MainPage = () => {
  return (
    <div className="mainPage">
      <WSconnection />
      <Form />
      <PhoneTable />
    </div>
  );
};

export default MainPage;
