import { combineReducers } from "redux";
import { commonReducer } from "./common/CommonReducer";
import userReducer from "./User/reducers";

const rootReducers = combineReducers({
  common: commonReducer,
  user : userReducer,
});
export default rootReducers;
export type State = ReturnType<typeof rootReducers>;
