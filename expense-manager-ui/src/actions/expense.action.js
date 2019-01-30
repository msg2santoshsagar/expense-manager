import {ADD_EXPENSE} from "./actionTypes";

export function addExpense(expense) {
    console.log('called');
    return {
        type: ADD_EXPENSE,
        expense
    }
}
