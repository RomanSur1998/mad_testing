import { useDispatch, useSelector } from "react-redux";
import { getDataArrayAction } from "../actions/Action";
import { reportData1, reportData2, reportData3 } from "../consts/Tabledata";
import { useEffect } from "react";

export function useChangeValue() {
  const { data } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (data.value) {
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
  }, [data.value]);
}
