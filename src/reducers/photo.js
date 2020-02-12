import actionType from "../actions/actionTypes"

const initialState = {
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.INIT:
      return {
        ...state
      }

    default:
      return state
  }
}