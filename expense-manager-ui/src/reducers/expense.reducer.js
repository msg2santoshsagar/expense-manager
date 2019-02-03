import { ADD_EXPENSE } from "../actions/actionTypes";

export function expenses(state = [], action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, ...action.expense];
    default:
      return state;
  }
}
