var problems = [
    {
        "inputAns": false,
        "diff": 1,
        "area": "Algebra",
        "topic": "Circles",
        "source": "Original",
        "problem": "Graph the equation \\((x-4)^2-16=-(y-1)^2\\).",
        "answer": "",
        "solution": ""
    },
    {
        "inputAns": true,
        "diff": 1,
        "area": "Algebra",
        "topic": "Circles",
        "source": "Original",
        "problem": "Write the equation of the circle that has diameter \\(\\overline{AB}\\) where \\(A(-2,3)\\) and \\(B(-5,7)\\). Express your answer in standard form.",
        "answer": "",
        "solution": ""
    }
];
var index = Math.floor(Math.random() * problems.length);

document.getElementById("problem").innerHTML = problems[index]["problem"];
document.getElementById("source").innerHTML = problems[index]["source"];
document.getElementById("area").innerHTML = problems[index]["area"];
document.getElementById("topic").innerHTML = problems[index]["topic"];
document.getElementById("diff").innerHTML = problems[index]["diff"];
MathJax.typeset();