import createFlowtype from "../index.js";

const demoControl = document.getElementById("demo-control");
const demoEl = document.getElementById("demo-article");

const flowtype = createFlowtype(demoEl);

demoControl.addEventListener("input", event => {
  demoEl.style.width = `${event.target.value}%`;
  flowtype.update();
});

demoEl.style.width = `${demoControl.value}%`;
flowtype.update();

document.body.className = "flowtyped";
