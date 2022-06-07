import React from "react";
import Table from "./table";
import { containerWrapper, headerClass } from "./style";

export default ({ data }) => {
  return (
    <div className={containerWrapper}>
      <div className={headerClass}>Covid-19 State Wise Data</div>
      <Table data={data} />
    </div>
  );
};
