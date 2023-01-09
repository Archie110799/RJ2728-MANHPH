import React from "react";

type Props = {};

function sumNumber(a: number, b: number): number {
  return a + b;
}

function isPositive(a: number) {
  return a > 0;
}

export default function Other({}: Props) {
  return (
    <>
      {/* function, input, output */}
      <div>{sumNumber(1, 2)}</div>
    </>
  );
}
