import React, { useEffect } from "react";
import styles from "../style/Table.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getValueAction } from "../actions/Action";
// import { StyleHook } from "../hooks/Styleshook";
import { useChangeValue } from "../hooks/ChangeValue";
import { BodyTable } from "../function/BodyTable";
import { HeaderTable } from "../function/HeaderTable";

const Table = () => {
  const { data } = useSelector((state) => state);
  console.log(data);
  const { header } = data.data;

  const dispatch = useDispatch();
  useChangeValue();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.tableContainer}>
          <div className={styles.selectBlock}>
            <select
              value={data.value}
              onChange={(e) => dispatch(getValueAction(e.target.value))}
            >
              <option value="Data Array 1">Data Array 1</option>
              <option value="Data Array 2">Data Array 2</option>
              <option value="Data Array 3">Data Array 3</option>
            </select>
          </div>
          <table>
            <thead>{HeaderTable(header)}</thead>
            {BodyTable(data)}
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
