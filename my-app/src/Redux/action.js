import { ADD_PLAN, ADD_POINTER, DELETE, POINTERS } from "./actionTypes";

export const addPlan = (data) => (dispatch) => {
  console.log("hellooo");
  dispatch({ type: ADD_PLAN, payload: data });
};

export const pointerplus = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: POINTERS, payload: data });
};

export const del = (data) => (dispatch) => {
  dispatch({ type: DELETE, payload: data });
};
