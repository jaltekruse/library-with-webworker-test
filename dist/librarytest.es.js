const s = new Worker("./lib/worker.js");
function t(e, o) {
  s.postMessage({ messageType: "squareRoot", num: o, destId: e });
}
s.onmessage = (e) => {
  console.log("Message received from worker", e), e.data.messageType === "squareRootResult" && (document.getElementById(e.data.destId).innerHTML = e.data.result);
};
export {
  t as squareRoot
};
