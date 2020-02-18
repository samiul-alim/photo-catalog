import actionType from "../actions/actionTypes"
import UUIDV4 from 'uuid/v4'

const initialState = {
  catalog: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.INIT:
      const loadedImages = localStorage.getItem('mpc-images');
      if (loadedImages) {
        state.catalog = JSON.parse(loadedImages);
      }
      return {
        ...state
      }
    case actionType.ADD_PHOTO_REQUEST:
      return {
        ...state, loading: true
      }
    case actionType.ADD_PHOTO_SUCCESS:
      state.catalog.push({
        id: UUIDV4(),
        isSelected: false,
        ...action.payload,
        date: action.payload.date.toISOString().slice(0, 10)
      });
      localStorage.setItem('mpc-images', JSON.stringify(state.catalog));
      return {
        ...state, loading: false
      }
    case actionType.ADD_PHOTO_FAILED:
      return {
        ...state, loading: false
      }
    case actionType.DELETE_PHOTO_REQUEST:
      return {
        ...state, loading: true
      }
    case actionType.DELETE_PHOTO_SUCCESS:
      const phtoIds = action.payload.photoIds;
      phtoIds.forEach(photoId => {
        const photo = state.catalog.find(item => item.id === photoId);
        if (photo) {
          state.catalog.splice(state.catalog.indexOf(photo), 1);
          localStorage.setItem('mpc-images', JSON.stringify(state.catalog));
        }
      })
      return {
        ...state, loading: false
      }
    case actionType.DELETE_PHOTO_FAILED:
      return {
        ...state, loading: false
      }
    default:
      return state
  }
}