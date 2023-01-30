import React from "react";
import PrivateRouter from "./PrivateRouter";
import { BrowserRouter } from "react-router-dom";
import Navi from "./Navi";

function MagicRouter() {
  return (
    <BrowserRouter>
      <Navi />
      <PrivateRouter />
    </BrowserRouter>
  );
}

export default MagicRouter;
