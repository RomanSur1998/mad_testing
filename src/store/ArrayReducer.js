import { reportData1 } from "../consts/Tabledata";

const defaultState = {
  data: reportData1,
  value: "Data Array 1",
};

export const CHANGE_ARRAY_STATE = "CHANGE_ARRAY_STATE";
export const CHANGE_VALUE_STATE = "CHANGE_VALUE_STATE";

export const ArrayReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ARRAY_STATE:
      return { ...state, data: action.payload };
    case CHANGE_VALUE_STATE:
      return { ...state, value: action.payload };

    default:
      return state;
  }
};
