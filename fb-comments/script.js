const commentObj = [];

const firstBtn = document.getElementById("1-btn");
const container = document.getElementsByClassName("container")[0];

firstBtn.addEventListener("click", (e) => {
  generateReplies(e.target.parentElement, e.target.previousElementSibling.value);
  e.target.previousElementSibling.value = "";
});

function generateReplies(parent, text, isReplies = false) {
  let ulEl;
  if ((!isReplies && parent.children.length < 3) || (isReplies && parent.children.length < 4)) {
    ulEl = document.createElement("ul");
    parent.append(ulEl);
  } else {
    ulEl = parent.children[2];
  }
  const list = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = text;
  const replyBtn = document.createElement("button");
  replyBtn.textContent = "reply";
  replyBtn.id = parent.children.length + 1;
  replyBtn.addEventListener("click", (e, i) => {
    if (!document.getElementsByClassName("replyInput")[0]) {
      const div = document.createElement("div");
      div.classList.add("reply");
      const replyInput = document.createElement("input");
      replyInput.classList.add("replyInput");
      const innerRepBtn = document.createElement("button");
      innerRepBtn.textContent = "comment";
      innerRepBtn.id = replyBtn.id + "" + i;
      innerRepBtn.addEventListener("click", (e) => {
        generateReplies(e.target.parentElement.parentElement, e.target.previousElementSibling.value, true);
        div.remove();
      });
      const innerCancel = document.createElement("button");
      innerCancel.textContent = "cancel";
      innerCancel.addEventListener("click", () => {
        div.remove();
      });
      div.append(replyInput, innerRepBtn, innerCancel);
      replyBtn.parentElement.append(div);
      replyInput.focus();
    }
  });
  list.append(span, replyBtn);
  ulEl.append(list);
}
