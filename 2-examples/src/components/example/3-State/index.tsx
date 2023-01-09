import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

export default function State() {
  return (
    <>
      <div className="row text-center">
        <div className="col">
          <ClassComponent title={"Day la TITLE"} />
        </div>
        <div className="col">
          <FunctionalComponent title={"Day la TITLE"} />
        </div>
      </div>
    </>
  );
}
