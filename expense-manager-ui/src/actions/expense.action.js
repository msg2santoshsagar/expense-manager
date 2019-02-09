import {ADD_EXPENSE} from "./actionTypes";

export function addExpense(expense) {
    return {
        type: ADD_EXPENSE,
        expense
    }
}
