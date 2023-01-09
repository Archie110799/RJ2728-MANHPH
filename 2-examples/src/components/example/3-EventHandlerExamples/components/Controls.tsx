import React from "react";

interface ControlsProps {
  onClick: (actionName : string | undefined) => void;
}

function Controls({ onClick }: ControlsProps) {
  const handleOnClick = (actionName?: string) => {
    onClick && onClick(actionName);
  };

  return (
    <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
      {/* SHUFFER */}
      <button
        onClick={() => {
          handleOnClick("shuffer");
        }}
      >
        Shuffer
      </button>

      {/* PREVIOUS */}
      <button
        onClick={() => {
          handleOnClick("previous");
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          handleOnClick("play");
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          handleOnClick("pause");
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          handleOnClick("next");
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          handleOnClick("repeat");
        }}
      >
        Repeat
      </button>
    </div>
  );
}

export default Controls;
