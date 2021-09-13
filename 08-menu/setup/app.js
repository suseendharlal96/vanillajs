const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const section = document.getElementsByClassName("section-center")[0];
window.addEventListener("DOMContentLoaded", () => {
  renderContents(menu);
});

const filterContainer = document.getElementsByClassName("btn-container")[0];
["all", ...new Set(menu.map((m) => m.category))].forEach((btn) => {
  const button = document.createElement("button");
  button.innerText = btn;
  button.classList.add("filter-btn");
  button.setAttribute("data-id", btn);
  filterContainer.appendChild(button);
  button.addEventListener("click", (e) => {
    let filteredMenu = [...menu];
    if (e.currentTarget.dataset.id !== "all") {
      filteredMenu = menu.filter((data) => data.category === button.getAttribute("data-id"));
    }
    renderContents(filteredMenu, button.getAttribute("data-id"));
  });
});

function renderContents(menu) {
  section.innerHTML = "";

  menu.forEach((m) => {
    const articleContainer = document.createElement("article");
    articleContainer.classList.add("menu-item");

    const img = document.createElement("img");
    img.classList.add("photo");
    img.src = m.img;

    const itemInfo = document.createElement("div");
    itemInfo.classList.add("item-info");

    const header = document.createElement("header");

    const name = document.createElement("h4");
    name.innerText = m.title;
    const price = document.createElement("h4");
    price.classList.add("price");
    price.innerText = `$ ${m.price}`;

    header.appendChild(name);
    header.appendChild(price);
    itemInfo.appendChild(header);

    const desc = document.createElement("p");
    desc.classList.add("item-text");
    desc.innerText = m.desc;
    itemInfo.appendChild(desc);

    articleContainer.appendChild(img);
    articleContainer.appendChild(itemInfo);
    section.appendChild(articleContainer);
  });
}
