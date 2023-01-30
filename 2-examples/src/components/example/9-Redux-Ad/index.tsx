import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import Navigation from "../../components/common/Navigation";
import PrivateRouter from "../8-MagicRouter/PrivateRouter";
import store from "./store";

function ReduxExample() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <PrivateRouter />
        <LoadingSpinner />
      </BrowserRouter>
    </Provider>
  );
}

export default ReduxExample;
