import actionType from "./actionTypes"
import { push } from "connected-react-router"
import ROUTES from '../utils/routes';
import { toast } from 'react-toastify';
toast.configure({});

export const gotoRoute = (payload) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(push(payload.route));
    }, 100);
  }
}

export const addPhotoToCatalog = (payload) => {
  return dispatch => {
    dispatch({ type: actionType.ADD_PHOTO_SUCCESS, payload });
    toast.info('Added successfully', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false
    });
    setTimeout(() => {
      dispatch(push(ROUTES.CATALOG));
    }, 100);
  }
}

export const deletePhoto = (payload) => {
  return dispatch => {
    dispatch({ type: actionType.DELETE_PHOTO_SUCCESS, payload });
    toast.info('Deleted successfully', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false
    });
  }
}
