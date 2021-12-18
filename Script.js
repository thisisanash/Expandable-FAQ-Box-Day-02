

let questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    // log(question)

    const btn = question.querySelector(".btn");
    // log(btn);

    const answer = question.querySelector(".answer");


    btn.addEventListener("click", function () {
        question.classList.toggle("show-answer");
    });
});