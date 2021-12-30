const commentObj = JSON.parse(localStorage.getItem("comments")) || [];


const container = document.getElementsByClassName("container")[0];
const firstBtn = document.getElementById("1-btn");

firstBtn.addEventListener("click", (e) => {
  if (firstBtn.previousElementSibling.value.trim().length > 0) {
    let list = createList(commentObj.length + 1, firstBtn.previousElementSibling.value);
    commentObj.push({ id: commentObj.length + 1, text: firstBtn.previousElementSibling.value, parent: 0 });
    localStorage.setItem("comments", JSON.stringify(commentObj));
    firstBtn.previousElementSibling.value = "";
    appendWithParent(container, list);
  } else {
    alert("enter a value");
  }
});

start();
function start() {
  commentObj.forEach(({ id, text, parent: parentId }) => {
    let list = createList(id, text);
    let parent = container;
    if (parentId) {
      parent = document.getElementById(parentId);
    }
    appendWithParent(parent, list);
  });
}

function createList(id, text) {
  const list = document.createElement("li");
  list.id = id;
  const span = document.createElement("span");
  span.innerText = text;
  const replyBtn = document.createElement("button");
  replyBtn.textContent = "reply";
  replyBtn.addEventListener("click", () => {
    if (document.getElementsByClassName("reply-container")[0]) return;
    const div = document.createElement("div");
    div.classList.add("reply-container");
    const replyInput = document.createElement("input");
    replyInput.classList.add("replyInput");
    replyInput.placeholder=`reply for ${text}`
    const innerRepBtn = document.createElement("button");
    innerRepBtn.textContent = "comment";
    innerRepBtn.addEventListener("click", () => {
      const val = replyInput.value;
      if (val.trim().length > 0) {
        div.remove();
        appendWithParent(list, createList(commentObj.length + 1, val));
        commentObj.push({ id: commentObj.length + 1, text: replyInput.value, parent: id });
        localStorage.setItem("comments", JSON.stringify(commentObj));
      } else {
        alert("enter a value");
      }
    });
    const innerCancel = document.createElement("button");
    innerCancel.textContent = "cancel";
    innerCancel.addEventListener("click", () => {
      div.remove();
    });
    div.append(replyInput, innerRepBtn, innerCancel);
    list.append(div);
    replyInput.focus();
  });
  list.append(span, replyBtn);
  return list;
}

function appendWithParent(parent, list) {
  if (parent.childElementCount > 2) {
    const ul = parent.getElementsByClassName("replyUl")[0];
    ul.append(list);
    parent.append(ul);
  } else {
    const ulEl = document.createElement("ul");
    ulEl.classList.add("replyUl");
    ulEl.append(list);
    parent.append(ulEl);
  }
}
