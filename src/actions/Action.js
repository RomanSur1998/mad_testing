import { CHANGE_ARRAY_STATE, CHANGE_VALUE_STATE } from "../store/ArrayReducer";

export const getDataArrayAction = (payload) => ({
  type: CHANGE_ARRAY_STATE,
  payload: payload,
});

export const getValueAction = (payload) => ({
  type: CHANGE_VALUE_STATE,
  payload: payload,
});
