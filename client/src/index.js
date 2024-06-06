// src/index.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const helloBtn = document.getElementById("helloBtn");

const hello = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
};

helloBtn.addEventListener("click", async () => {
  const name = await hello("Dariuszewski");
  alert(`Hello, ${name}!`);
  console.log("Async function executed!");
});
