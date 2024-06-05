import React from "react";

export default function B10() {
  const numbers: number[] = [1, 2, 2, 3, 4, 5, 6];

  function myFindIndex(arr: number[], number: number, callback: Function) {
    for (let i = 0; i < arr.length; i++) {
      if (number === arr[i]) {
        callback(i);
        return;
      }
    }
    callback(-1);
  }

  myFindIndex(numbers, 2, callback);
  myFindIndex(numbers, 10, callback);

  function callback(index: number) {
    if (index === -1) {
      console.log(-1);
    } else {
      console.log(index);
    }
  }
  return (
    <div>B10</div>
  );
}
