export default function B5() {
  function checkCondition(
    callback: (check: boolean) => void,
    condition: boolean
  ) {
    let check2 = condition;
    setInterval(() => {
      callback(check2);
      check2 = !check2;
    }, 1000);
  }
  function printCallBack(check: boolean) {
    console.log("Điều kiện trả về: ", check);
  }
  checkCondition(printCallBack, true);
  return (
    <div>B5</div>
  );
}
