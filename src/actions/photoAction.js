import actionType from "./actionTypes"
import { push } from "connected-react-router"

export const gotoRoute = (payload) => {
  return dispatch => {
    return setTimeout(() => {
      dispatch(push(payload.route))
    }, 200)
  }
}
