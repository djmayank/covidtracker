import React from "react";
import { useEffect, useState } from "react";
import { cx } from "@emotion/css";
import {
  table,
  tableWrapper,
  trClass,
  tdClass,
  thClass,
  sortClass,
  sortSelectClass,
  sortWrapper,
  thead,
  mobileClass
} from "./style";

export default ({ data }) => {
  const [covidData, setcovidData] = useState(data);
  const [sortData, setSortData] = useState("name");

  useEffect(() => setcovidData(data), [data]);

  useEffect(() => {
    let sortable = [];
    for (var c_data in covidData) {
      sortable.push([c_data, covidData[c_data]]);
    }

    if (sortData === "active") {
      sortable.sort(function (a, b) {
        return parseInt(b[1].active) - parseInt(a[1].active);
      });
    } else if (sortData === "death") {
      sortable.sort(function (a, b) {
        return parseInt(b[1].death) - parseInt(a[1].death);
      });
    } else if (sortData === "cured") {
      sortable.sort(function (a, b) {
        return parseInt(b[1].cured) - parseInt(a[1].cured);
      });
    } else if (sortData === "name") {
      sortable.sort(function (a, b) {
        if (a[1].state_name < b[1].state_name) return -1;
        if (a[1].state_name > b[1].state_name) return 1;
        return 0;
      });
    }

    let objSorted = {};
    sortable.forEach(function (item, index) {
      objSorted[index - 1] = item[1];
    });
    setcovidData(objSorted);
  }, [sortData]);

  return covidData ? (
    <div className={tableWrapper}>
      <div className={sortWrapper}>
        <div className={sortClass}>Sort Data</div>
        <select
          name='sort-fields'
          id='sort'
          className={sortSelectClass}
          onChange={e => setSortData(e.target.value)}
        >
          <option value='name'>Name</option>
          <option value='active'>Active Cases</option>
          <option value='death'>Death Cases</option>
          <option value='cured' className={mobileClass}>
            Cured Cases
          </option>
        </select>
      </div>
      <table className={table}>
        <thead className={thead}>
          <tr className={trClass}>
            <th className={thClass}>S.No.</th>
            <th className={thClass}>Name of State</th>
            <th className={thClass}>Active Cases</th>
            <th className={thClass}>Deaths</th>
            <th className={cx(thClass, mobileClass)}>Cured</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(covidData).map(index => {
            return covidData[index].state_name ? (
              <tr key={covidData[index].sno} className={trClass}>
                <td className={tdClass}>{parseInt(index) + 1}</td>
                <td className={tdClass}>{covidData[index].state_name}</td>
                <td className={tdClass}>{covidData[index].active}</td>
                <td className={tdClass}>{covidData[index].death}</td>
                <td className={cx(tdClass, mobileClass)}>
                  {covidData[index].cured}
                </td>
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
    </div>
  ) : null;
};
