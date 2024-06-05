import React from "react";

export default function B8() {
  const numbers: number[] = [1, 2, 3, 4, 5];

  function myFind(numbers: number[], numberFind: number, callback: Function) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === numberFind) {
        callback(numbers[i]);
        return;
      }
    }
    callback(null);
  }

  myFind(numbers, 2, callback);
  //   myFind(numbers, 6, callback);

  function callback(element: number | null) {
    if (element === null) {
      console.log("Không tìm thấy phân tử");
    } else {
      console.log(`Phần tử tìm thấy là: ${element}`);
    }
  }
  return (
    <div>B8</div>
  );
}
