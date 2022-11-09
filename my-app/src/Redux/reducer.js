import { ADD_PLAN, DELETE, POINTERS } from "./actionTypes";

const initState = {
  point: [],
  plans: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_PLAN:
      return {
        ...state,
        plans: [...state.plans, payload],
      };

    case POINTERS:
      return {
        ...state,
        point: [...state.point, payload],
      };

    case DELETE:
      return {
        ...state,
        plans: [state.plans.filter((el) => el !== payload)],
      };
    default: {
      return state;
    }
  }
};
