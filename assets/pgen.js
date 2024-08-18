import { problems } from "./problems.js";

var filteredProblems = [];

var index = 0;

function giveProblem() {
    filteredProblems = [];

    document.getElementById("ansStatus").innerHTML = "";
    document.getElementById("ansStatus").className = "";

    var chosenTopic = document.getElementById("choosetopic").value;

    for (let i = 0; i < problems.length; i++) {
        if (problems[i]["topic"] == chosenTopic) {
            filteredProblems.push(problems[i]);
        }
    }

    if (filteredProblems.length == 0) {
        document.getElementById("problem").innerHTML = "There are no problems available.";
        document.getElementById("source").innerHTML = "";
        document.getElementById("topic").innerHTML = "";
        document.getElementById("diff").innerHTML = "";
        document.getElementById("answer").innerHTML = "";
        document.getElementById("solution").innerHTML = "";
        return;
    }

    index = Math.floor(Math.random() * filteredProblems.length);

    if (filteredProblems[index]["inputAns"] === true) {
        document.getElementById("inputAns").disabled = false;
        document.getElementById("submitAns").disabled = false;
    }
    else {
        document.getElementById("inputAns").disabled = true;
        document.getElementById("submitAns").disabled = true;
    }

    document.getElementById("problem").innerHTML = filteredProblems[index]["problem"];
    document.getElementById("source").innerHTML = filteredProblems[index]["source"];
    document.getElementById("topic").innerHTML = filteredProblems[index]["topic"];
    document.getElementById("diff").innerHTML = filteredProblems[index]["diff"];

    if (filteredProblems[index]["answer"] == "") {
        document.getElementById("answer").innerHTML = "The problem curator has not yet given an answer for this problem.";
    }
    else {
        document.getElementById("answer").innerHTML = filteredProblems[index]["answer"];
    }

    if (filteredProblems[index]["solution"] == "") {
        document.getElementById("solution").innerHTML = "The problem curator has not yet given a solution for this problem.";
    }
    else {
        document.getElementById("solution").innerHTML = filteredProblems[index]["solution"];
    }

    MathJax.typesetPromise().then(() => {
        MathJax.typesetPromise();
      }).catch((err) => {
        console.error("MathJax didn't process", err)
      });
}

function checkAnswer() {
    if (document.getElementById("inputAns").value == filteredProblems[index]["userAns"]) {
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