import React from "react";
import { cx } from "@emotion/css";
import {
  outerWrapper,
  cardClass,
  activeClass,
  dischargedClass,
  deathClass,
  titleClass,
  subtitleClass,
  perClass,
  vaccCardWrapper,
  varPerClass
} from "./style";

export const beautifyData = (str = "") => {
  return str.trim().split(/\s+/);
};

export default ({ data }) => {
  const realTimeCombinedData = data && data[0];
  const { compiledData, vaccCount, vaccCountPer } = realTimeCombinedData || {};
  const [activeCount, activePer] = beautifyData(
    compiledData && compiledData[1]
  );
  const [dischargedCount, dischargedPer] = beautifyData(
    compiledData && compiledData[3]
  );
  const [deathCount, deathPer] = beautifyData(compiledData && compiledData[5]);
  return data
    ? [
        <div className={outerWrapper}>
          <div className={cx(cardClass, activeClass)}>
            <div className={titleClass}>{compiledData[0]}</div>
            <div className={cx(titleClass, subtitleClass)}>
              {activeCount}
              <div className={perClass}>{activePer}&#8593;</div>
            </div>
          </div>
          <div className={cx(cardClass, dischargedClass)}>
            <div className={titleClass}>{compiledData[2]}</div>
            <div className={cx(titleClass, subtitleClass)}>
              {dischargedCount}
              <div className={perClass}>{dischargedPer}&#8593;</div>
            </div>
          </div>
          <div className={cx(cardClass, deathClass)}>
            <div className={titleClass}>{compiledData[4]}</div>
            <div className={cx(titleClass, subtitleClass)}>
              {deathCount}
              <div className={perClass}>{deathPer}&#8593;</div>
            </div>
          </div>
        </div>,
        <div className={vaccCardWrapper}>
          <div>Total Vaccination: {vaccCount}</div>
          <div className={varPerClass}>({vaccCountPer})&#8593;</div>
        </div>
      ]
    : null;
};
