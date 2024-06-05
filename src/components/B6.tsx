import React from "react";

export default function B6() {
  function task1(callback: Function) {
    setTimeout(() => {
      console.log("task 1 được thực thi");
      if (callback) {
        callback();
      }
    }, 1000);
  }
  function task2(callback: Function) {
    setTimeout(() => {
      console.log("task 2 được thực thi");
      if (callback) {
        callback();
      }
    }, 1500);
  }
  function task3(callback: Function) {
    setTimeout(() => {
      console.log("task 3 được thực thi!");
      if (callback) {
        callback();
      }
    }, 2000);
  }

  function runTask() {
    task1(() => {
      task2(() => {
        task3(() => {
          console.log("Hoàn thành");
        });
      });
    });
  }

  runTask();
  return (
    <div>B6</div>
  );
}
