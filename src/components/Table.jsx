import React, { useEffect } from "react";
import styles from "../style/Table.module.css";
import { reportData1, reportData2, reportData3 } from "../consts/Tabledata";
import { useDispatch, useSelector } from "react-redux";
import { getDataArrayAction, getValueAction } from "../actions/Action";

const Table = () => {
  const { data } = useSelector((state) => state);
  console.log(data);

  const dispatch = useDispatch();

  function handleChangeArray(selectedValue) {
    switch (selectedValue) {
      case "Data Array 1":
        dispatch(getDataArrayAction(reportData1));
        break;
      case "Data Array 2":
        dispatch(getDataArrayAction(reportData2));
        break;
      case "Data Array 3":
        dispatch(getDataArrayAction(reportData3));
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    handleChangeArray(data.value);
  }, [data.value]);

  function setStyleAlign(columnType, align) {
    if (align) {
      return align;
    } else {
      switch (columnType) {
        case "string":
          return "left";
        case "integer":
          return "right";
        case "float":
          return "right";
        case "boolean":
          return "center";
        default:
          return "left";
      }
    }
  }

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
            <thead>
              <tr>
                {data.data.header.map((item) => (
                  <th key={item.id} style={{ textAlign: item.align }}>
                    {item.caption}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.data.data.map((item, index) => (
                <tr key={index}>
                  {item.map((elem, index) => (
                    <td
                      key={index}
                      style={{
                        textAlign: setStyleAlign(
                          data.data.header[index].type,
                          data.data.header[index].align
                        ),
                      }}
                    >
                      {typeof elem === "object"
                        ? elem.d
                        : typeof elem === "boolean"
                        ? elem === true
                          ? "Active"
                          : "Unactive"
                        : elem}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
