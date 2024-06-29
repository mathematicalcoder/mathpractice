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
        "diff": 2,
        "area": "Algebra",
        "topic": "Circles",
        "source": "Original",
        "problem": "Write the equation of the circle that has diameter \\(\\overline{AB}\\) where \\(A(-2,3)\\) and \\(B(-5,7)\\). Express your answer in standard form.",
        "answer": "",
        "solution": ""
    },
    {
        "inputAns": true,
        "diff": 1,
        "area": "Algebra",
        "topic": "Circles",
        "source": "Original",
        "problem": "Rewrite the equation \\(x^2-6x+y^2-10x=-18\\) in standard form.",
        "answer": "",
        "solution": ""
    },
    {
        "inputAns": true,
        "diff": 2,
        "area": "Algebra",
        "topic": "Circles",
        "source": "Original",
        "problem": "Find the area of the circle given by \\(x^2+2 x+y^2-6 x=-10\\).",
        "answer": "",
        "solution": ""
    },
    {
        "inputAns": true,
        "diff": 2,
        "area": "Algebra",
        "topic": "Circles",
        "source": "Original",
        "problem": "Graph the equation \\(2 x^2-16 x+2 y^2-4 y=-30\\).",
        "answer": "",
        "solution": ""
    }
];

function giveProblem() {
    var index = Math.floor(Math.random() * problems.length);
    document.getElementById("problem").innerHTML = problems[index]["problem"];
    document.getElementById("source").innerHTML = problems[index]["source"];
    document.getElementById("area").innerHTML = problems[index]["area"];
    document.getElementById("topic").innerHTML = problems[index]["topic"];
    document.getElementById("diff").innerHTML = problems[index]["diff"];
    MathJax.typeset();
}

giveProblem();
document.getElementById("newProblem").addEventListener("click", giveProblem);