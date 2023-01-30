import { useReducer } from "react";

enum CountActionTypes {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
}

interface ICountState {
  count: number;
}
interface IAction {
  type: string;
  payload: number;
}

const DefaultState: ICountState = {
  count: 1,
};

const countReducer = (state: ICountState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case CountActionTypes.INCREASE: {
      return {
        ...state,
        count: state.count + payload,
      };
    }
    case CountActionTypes.DECREASE: {
      return {
        ...state,
        count: state.count - payload,
      };
    }
    default:
      return state;
  }
};

// Giống như Reducer trong Redux 
// thì useReducer cũng nhận vào một reducer dạng (state, action) 
// và trả ra một newState. Khi sử dụng chúng ta sẽ nhận được một cặp 
// bao gồm current state và dispatch function.
const UseReducer = ({ step = 1 }) => {
  const [state, dispatch] = useReducer(countReducer, DefaultState);
  const { count } = state;
  const increment = () =>
    dispatch({ type: CountActionTypes.INCREASE, payload: step });
  const decrement = () =>
    dispatch({ type: CountActionTypes.DECREASE, payload: step });
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default UseReducer;
