import React, { lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";
import BaseLayout from "./BaseLayout";

type Props = {};

function PrivateRouter({}: Props) {
  const privateRoutes = [
    {
      path: ROUTES.ADMIN_DASHBOARD,
      element: lazy(() => import("./pages/HomePage")),
    },
    {
      path: ROUTES.ADMIN_ABOUT,
      element: lazy(() => import("./pages/AboutPage")),
    },
    {
      path: "*",
      element: lazy(() => import("./NotFound")),
    },
  ];
  return (
    <>
      <Routes>
        <Route element={<BaseLayout />}>
          {privateRoutes.map((route, index) => (
            <Route
              path={route.path}
              element={
                <React.Suspense fallback={<>...</>}>
                  {<route.element />}
                </React.Suspense>
              }
              key={index}
            ></Route>
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default PrivateRouter;
