var problems = [
    {
        "inputAns": false,
        "diff": 1,
        "area": "Algebra",
        "topic": "Circles",
        "source": "Original",
        "problem": "Graph the equation \\((x-4)^2-16=-(y-1)^2.\\)",
        "solution": ""
    },
    {
        "inputAns": true,
        "diff": 1,
        "area": "Algebra",
        "topic": "Circles",
        "source": "Original",
        "problem": "Write the equation of the circle that has diameter \\(\\overline{AB}\\) where \\(A(-2,3)\\) and \\(B(-5,7).\\) Express your answer in standard form.",
        "answer": "",
        "solution": ""
    }
];
document.getElementById("problem").innerHTML = problems[Math.floor(Math.random() * 2)]["problem"];