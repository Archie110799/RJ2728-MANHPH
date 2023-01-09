import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

export default function Component() {
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
      {/* * PROPS - READONLY - Truyen data tu CHA -> CON
      - Component cha: Add thuoc tinh JSX props ( tenProp = giatri cua prop)
      - Component con: 
      + Khai bao ten prop o Type (co duoc undefined (?: :) , data types cua bien )
      + Su dung
        Class: this.props.isLogin
        Funtional : isLogin */}
    </>
  );
}
