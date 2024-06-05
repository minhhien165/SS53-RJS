import React from "react";

export default function B7() {
  const numbers: number[] = [1, 2, 3, 4, 5];
  function myForEach(numbers: number[], callback: Function) {
    for (let i = 0; i < numbers.length; i++) {
      callback(i, numbers[i], numbers);
    }
  }

  myForEach(numbers, callback);

  function callback(index: number, item: number, arr: number[]) {
    console.log(`vị trí: ${index} | phần tử: ${item} | Mảng: [${arr}]`);
  }
  return (
    <div>B7</div>
  );
}
