export default function B2() {
  function delayedCallback(callback: any, num: number) {
    setTimeout(callback, num);
  }
  function myCallBack() {
    console.log("Callback đã được gọi");
  }
  delayedCallback(myCallBack, 2000);
  return (
    <div>B2</div>
  );
}
