import { FETCH_MENU, FETCH_MENU_SUCCESS, FETCH_MENU_FAILURE } from '../constants'

const initialState = {
  menu: [],
  isFetching: false,
  error: false
}

export default function menuReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_MENU:
      return {
        ...state,
        menu: [],
        isFetching: true
      }
    case FETCH_MENU_SUCCESS:
      return {
        ...state,
        isFetching: false,
        menu: action.data.products
      }
    case FETCH_MENU_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state;
  }
}
