//using selectors inside the element
// traversing the dom

const questions = document.getElementsByClassName("question");
for (let i = 0; i < questions.length; i++) {
  questions[i].querySelector(".question-btn").addEventListener("click", (e) => {
    // if (e.target.classList.value.search("minus") >= 0) {
    //   e.currentTarget.classList.remove("show-text");
    // } else {
    //   e.currentTarget.classList.add("show-text");
    // }

    for (let j = 0; j < questions.length; j++) {
      if (questions[j] !== questions[i]) {
        questions[j].classList.remove("show-text");
      }
    }

    questions[i].classList.toggle("show-text");
  });
}
// const qBtn = document.getElementsByClassName("question-btn")[0];
// qBtn.addEventListener("click", (e) => {
//   console.log(e.target, e.currentTarget);
// });
