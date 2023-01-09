//tsrfce
import React from "react";
import { useState } from "react";

type Props = {
  title: string;
};

function FunctionalComponent(props: Props) {
  const { title } = props;
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>
        {title} - {number}
      </h1>
      <div>FunctionalComponent</div>
      <button onClick={() => setNumber(number + 1)}>Plus</button>
    </>
  );
}

export default FunctionalComponent;
