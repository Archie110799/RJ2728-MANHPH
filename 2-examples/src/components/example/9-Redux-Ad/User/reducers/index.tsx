import { IAction, IUser } from "../../interfaces/common";
import Types from "../../type";

// DEFAULT STATE
interface DefaultState {
  users: IUser[];
}

const initState: DefaultState = {
  users: [],
};

const userReducer = (state: DefaultState = initState, action: IAction) => {
  switch (action.type) {
    case Types.GET_USER_SUCCESS:
      return { ...state, users: action.payload };
    case Types.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users?.filter((user: IUser) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
