const input = document.querySelector("#input");
console.log(input);
const button = document.querySelector("#btn");
const wrapper = document.querySelector("#wrapper");
const output = document.querySelector("#output");

const heading = document.querySelector("#heading-Age");

// heading.style.cssText = "color:red;";
output.style.cssText = "color: red; font-size: 2rem; ";
wrapper.style.cssText =
  "background: white; margin-top: 5rem; padding-top:0.5rem; width: 50%; margin-left:auto; margin-right: auto; height: 50vh";

btn.addEventListener("click", () => {
  const dob = input.value.slice(0, 4);

  if (dob == "") {
    alert("Enter Your DOB first");
  } else {
    operations = 2024 - Number(dob);
    let para = document.createElement("p");
    para.innerText = `Your Age is ${operations} old`;
    output.innerText = para.innerText;
  }
});
