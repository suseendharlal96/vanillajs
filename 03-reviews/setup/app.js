// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const prev = document.getElementsByClassName("prev-btn")[0];
const next = document.getElementsByClassName("next-btn")[0];
const random = document.getElementsByClassName("random-btn")[0];

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const image = document.getElementById("person-img");

let curr = 0;
window.addEventListener("DOMContentLoaded", () => {
  changeContent(curr);
});

function changeContent(currIdx) {
  author.innerText = reviews[currIdx].name;
  job.innerText = reviews[currIdx].job;
  info.innerText = reviews[currIdx].text;
  info.innerText = reviews[currIdx].text;
  image.src = reviews[currIdx].img;
}

[prev, next, random].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.classList[0] === "prev-btn") {
      curr -= 1;
      if (curr < 0) {
        curr = reviews.length - 1;
      }
    } else if (e.currentTarget.classList[0] === "next-btn") {
      curr++;
      curr %= reviews.length;
    } else {
      curr = Math.floor(Math.random() * reviews.length);
    }
    changeContent(curr);
  });
});

// const div = document.getElementById("btns");

// const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// buttons.forEach((b) => {
//   const btn = document.createElement("button");
//   btn.innerText = b;
//   btn.id = "btn" + b;
//   div.appendChild(btn);
// });

// const nums = [1, 2, 3, 6, 9, 8, 7, 4];
// const ids = [1, 2, 3, 6, 9, 8, 7, 4];

// document.getElementById("btn5").addEventListener("click", () => {
//   nums.unshift(nums.pop());
//   nums.forEach((b, i) => {
//     const btn = document.getElementById(`btn${ids[i]}`);
//     btn.innerText = b;
//   });
// });
