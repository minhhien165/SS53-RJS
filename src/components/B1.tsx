import React from 'react'

export default function B1() {
  function Calculate(a: number, b: number, callback: any) {
    const result = a + b;
    callback(result);
  }

  function Answer(result: number) {
    console.log(result);
  }
  Calculate(10, 20, Answer);
  return (
    <div>B1</div>
  );
}

