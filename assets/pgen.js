function giveProblem() {
    var index = Math.floor(Math.random() * problems.length);
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

giveProblem();
document.getElementById("newProblem").addEventListener("click", giveProblem);