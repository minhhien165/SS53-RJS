import React from "react";

export default function B9() {
  const numbers: number[] = [1, 2, 2, 3, 4, 5, 6];

  function myFilter(arr: number[], number: number, callback: Function) {
    let newArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (number === arr[i]) {
        newArr.push(arr[i]);
      }
    }
    callback(newArr);
  }

  myFilter(numbers, 2, callback);
  //   myFilter(numbers, 7, callback);

  function callback(arr: number[]) {
    if (arr.length === 0) {
      console.log([]);
    } else {
      console.log(arr);
    }
  }
  return (
    <div>B9</div>
  );
}
