const container = document.getElementsByClassName("container")[0];
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((props) => {
      console.log(props.target, props.isIntersecting);
      props.target.classList.toggle("active", props.isIntersecting);
    });
  },
  {
    threshold: 1,
    // root: container,
  }
);

generateList();
function generateList() {
  Array.from({ length: 10 }).forEach((_, i) => {
    const list = document.createElement("div");
    list.classList.add("list");
    list.innerText = container.childElementCount + 1;
    container.append(list);
    observer.observe(list);
  });
}


const lastElObserver = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) return;
  generateList();
  lastElObserver.unobserve(entries[0].target);
  lastElObserver.observe(container.querySelector(".list:last-child"));
});

lastElObserver.observe(container.querySelector(".list:last-child"));

