import React from "react";
import {
  headerClass,
  logoClass,
  logoTitleClass,
  titleWrapper,
  dataSourceClass
} from "./style";
import Logo from "../../../public/logo.png";

export default () => {
  return (
    <div className={headerClass}>
      <div className={titleWrapper}>
        <img src={Logo} className={logoClass} alt='covid tracker' />
        <div className={logoTitleClass}>Covid Tracker</div>
      </div>
      <div className={dataSourceClass}>Data source: mohfw.gov.in</div>
    </div>
  );
};
