import React from "react";
import Count from "./Count";
import Button from "./Button";
import { useState, useEffect, useCallback } from "react";

function ReactMemo() {
  const [count, setCount] = useState(0);

  const [refresh, setRefresh] = useState(new Date());

  // useCallback
  const increaseCount = useCallback(() => {
    // setCount(count + 1);
    setCount((c) => c + 1);
  }, []);

  useEffect(() => {
    console.log("ComponentDidMount");
    return () => {
      //execute before the next effect or unmount
      console.log("ComponentWillUnmount")
    };
  }, []);

  useEffect(() => {
    console.log("ComponentDidUpdate");
  }, [count, refresh]);

  return (
    <div>
      <Count count={count} text="I am count component" />

      <Button onClick={increaseCount}>I am button</Button>

      <button
        onClick={() => {
          setRefresh((r) => new Date());
        }}
      >
        Reset date
      </button>

      <h1>{refresh.toString()}</h1>
    </div>
  );
}

export default ReactMemo;
