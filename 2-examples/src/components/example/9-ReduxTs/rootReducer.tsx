import { combineReducers } from "redux";

interface IUser {
  name: string;
  avatar: string;
  email: string;
  code: string;
  id: string;
}
interface IAction {
  type: string;
  payload?: any;
}
const defaultState = {
  users: [],
  loading: 0,
  error: null,
};

const userReducers = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case "GET_PENDDING":
      return { ...state, loading: state.loading + 1 };
    case "GET_SUCCESS":
      return {
        ...state,
        users: action.payload,
        error: null,
        loading: state.loading - 1,
      };
    case "GET_ERROR":
      return { ...state, error: action.payload, loading: state.loading - 1 };
    case "DELETE_PENDDING":
      return { ...state, loading: state.loading + 1 };
    case "DELETE_SUCCESS":
      const usersAfterDeleted = state.users.filter((element: IUser) => {
        return element.id !== action.payload.id;
      });
      return {
        ...state,
        users: usersAfterDeleted,
        error: null,
        loading: state.loading - 1,
      };
    case "DELETE_ERROR":
      return { ...state, error: action.payload, loading: state.loading - 1 };

    default:
      return state;
  }
};

const rootReducers = combineReducers({
  userReducers,
});
export default rootReducers;
export type State = ReturnType<typeof rootReducers>;
