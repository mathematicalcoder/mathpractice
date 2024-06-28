import problems from "./problems.json";
document.getElementById("problem").innerHTML = problems[Math.floor(Math.random() * 2)].problem;
