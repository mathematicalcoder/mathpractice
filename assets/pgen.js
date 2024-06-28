import problems from "./problems.json" assert { type: 'json' };
document.getElementById("problem").innerHTML = problems[Math.floor(Math.random() * 2)].problem;
