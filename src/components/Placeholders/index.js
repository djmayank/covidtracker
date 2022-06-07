import React from "react";
import {
  placeholdersWrapper,
  cardPlaceholder,
  bigCardPlaceholder,
  tableOuterWrapper,
  titlePlaceholder,
  tablesortPlaceholder,
  sortPlaceholder,
  tablePlaceholder
} from "./style";

export default () => {
  return [
    <div className={placeholdersWrapper}>
      <div className={cardPlaceholder}></div>
      <div className={cardPlaceholder}></div>
      <div className={cardPlaceholder}></div>
    </div>,
    <div className={bigCardPlaceholder}></div>,
    <div className={tableOuterWrapper}>
      <div className={titlePlaceholder}></div>
      <div className={tablesortPlaceholder}>
        <div className={sortPlaceholder}></div>
        <div className={tablePlaceholder}></div>
      </div>
    </div>
  ];
};
