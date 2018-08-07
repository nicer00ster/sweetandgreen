export const GET_MENU = 'GET_MENU';
export const GET_MENU_SUCCESS = 'GET_MENU_SUCCESS';
export const GET_MENU_FAIL = 'GET_MENU_FAIL';

export default function reducer(state = { menuItems: [] }, action) {
  switch(action.type) {
    case GET_MENU:
      return { ...state, loading: true };
    case GET_MENU_SUCCESS:
      return { ...state, loading: false, menuItems: action.payload.data };
    case GET_MENU_FAIL:
      return {
        ...state, loading: false, error: 'Error: Server failed to respond with request.'
      };
    default:
      return state;
  }
}

export function listMenuItems(id) {
  return {
    type: GET_MENU,
    payload: {
      request: {
        url: `/api/menus/${id}`
      }
    }
  }
}
