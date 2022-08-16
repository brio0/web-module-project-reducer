export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_NUMBER = "CLEAR_NUMBER"

export const addOne = () => {
    return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
    return ({ type: APPLY_NUMBER, payload: number });
}

export const changeOperation = (operator) => {
    return ({ type: CHANGE_OPERATION, payload: operator })
}

export const clearNumber = () => {
    return ({ type: CLEAR_NUMBER });
}
