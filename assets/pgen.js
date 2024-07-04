var problems = [
    {
        "inputAns": false,
        "diff": 1,
        "area": "Algebra",
        "topic": "Circle Equations",
        "source": "Original",
        "problem": "Graph the equation \\((x-4)^2-16=-(y-1)^2\\).",
        "answer": "",
        "userAns": "",
        "solution": ""
    },
    {
        "inputAns": true,
        "diff": 2,
        "area": "Algebra",
        "topic": "Circle Equations",
        "source": "Original",
        "problem": "Write the equation of the circle that has diameter \\(\\overline{AB}\\) where \\(A(-2,3)\\) and \\(B(-5,7)\\). Express your answer in standard form.",
        "answer": "",
        "userAns": "",
        "solution": ""
    },
    {
        "inputAns": true,
        "diff": 1,
        "area": "Algebra",
        "topic": "Circle Equations",
        "source": "Original",
        "problem": "Rewrite the equation \\(x^2-6x+y^2-10x=-18\\) in standard form.",
        "answer": "\\((x-3)^2+(y-5)^2=16\\)",
        "userAns": "(x-3)^2+(y-5)^2=16",
        "solution": ""
    },
    {
        "inputAns": true,
        "diff": 2,
        "area": "Algebra",
        "topic": "Circle Equations",
        "source": "Original",
        "problem": "Find the area of the circle given by \\(x^2+2 x+y^2-6 x=-10\\).",
        "answer": "\\(0\\)",
        "userAns": "0",
        "solution": ""
    },
    {
        "inputAns": true,
        "diff": 2,
        "area": "Algebra",
        "topic": "Circle Equations",
        "source": "Original",
        "problem": "Graph the equation \\(2 x^2-16 x+2 y^2-4 y=-30\\).",
        "answer": "",
        "userAns": "",
        "solution": ""
    }
];

var index = 0;

function giveProblem() {
    document.getElementById("ansStatus").innerHTML = "";
    document.getElementById("ansStatus").className = "";

    index = Math.floor(Math.random() * problems.length);

    if (problems[index]["inputAns"] == true) {
        document.getElementById("inputAns").disabled = false;
        document.getElementById("submitAns").disabled = false;
    }
    else {
        document.getElementById("inputAns").disabled = true;
        document.getElementById("submitAns").disabled = true;
    }

    document.getElementById("problem").innerHTML = problems[index]["problem"];
    document.getElementById("source").innerHTML = problems[index]["source"];
    document.getElementById("area").innerHTML = problems[index]["area"];
    document.getElementById("topic").innerHTML = problems[index]["topic"];
    document.getElementById("diff").innerHTML = problems[index]["diff"];
    document.getElementById("id").innerHTML = index + 1;

    if (problems[index]["answer"] == "") {
        document.getElementById("answer").innerHTML = "The problem curator has not yet given an answer for this problem.";
    }
    else {
        document.getElementById("answer").innerHTML = problems[index]["answer"];
    }

    if (problems[index]["solution"] == "") {
        document.getElementById("solution").innerHTML = "The problem curator has not yet given a solution for this problem.";
    }
    else {
        document.getElementById("solution").innerHTML = problems[index]["solution"];
    }

    MathJax.typeset();
}

function checkAnswer() {
    if (document.getElementById("inputAns").value == problems[index]["userAns"]) {
        document.getElementById("ansStatus").innerHTML = "<b>Your answer is correct!</b>";
        document.getElementById("ansStatus").className = "alert alert-success my-2";
        document.getElementById("inputAns").disabled = true;
        document.getElementById("submitAns").disabled = true;
    }
    else {
        document.getElementById("ansStatus").innerHTML = "<b>Your answer is incorrect. Try again!</b>";
        document.getElementById("ansStatus").className = "alert alert-danger my-2";
    }
}

function disableAnsField() {
    document.getElementById("inputAns").disabled = true;
    document.getElementById("submitAns").disabled = true;
}

giveProblem();
document.getElementById("newProblem").addEventListener("click", giveProblem);
document.getElementById("submitAns").addEventListener("click", checkAnswer);
document.getElementById("showAnsSoln").addEventListener("click", disableAnsField);