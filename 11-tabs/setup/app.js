const content = [
  {
    name: "history",
    content: `<p>I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice
        pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean
        shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small
        batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral
        direct trade hoodie ugh chambray, craft beer pork belly flannel tacos
        single-origin coffee art party migas plaid pop-up.</p>`,
  },
  {
    name: "vision",
    content: `<p>
        
        Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal
        deep v hella biodiesel. Church-key listicle polaroid put a bird on it
        chillwave palo santo enamel pin, tattooed meggings franzen la croix cray.
        Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu
        mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof
        party hammock master cleanse pop-up truffaut, bicycle rights skateboard
        affogato readymade sustainable deep v live-edge schlitz narwhal.</p>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <p>Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four
        dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred
        fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel
        sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid
        cold-pressed roof party. Small batch adaptogen coloring book heirloom.
        Letterpress food truck hammock literally hell of wolf beard adaptogen everyday
        carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa
        chicharrones.</p>
        `,
  },
  {
    name: "goals",
    content: `<p>
        
        Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal
        deep v hella biodiesel. Church-key listicle polaroid put a bird on it
        chillwave palo santo enamel pin, tattooed meggings franzen la croix cray.
        Retro yr aesthetic four <code><b>Loko</b></code> loko tbh helvetica air plant, neutra palo santo tofu
        mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof
        party hammock master cleanse pop-up truffaut, bicycle rights skateboard
        affogato readymade sustainable deep v live-edge schlitz narwhal.</p>
        <ol>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        </ol>
        <p>Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four
        dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred
        fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel
        sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid
        cold-pressed roof party. Small batch adaptogen coloring book heirloom.
        Letterpress food truck hammock literally hell of wolf beard adaptogen everyday
        carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa
        chicharrones.</p>
        `,
  },
];

const btnContainer = document.querySelector(".btn-container");
const contentContainer = document.querySelector(".about-content");

content.forEach((c, i) => {
  const btn = document.createElement("button");
  btn.innerText = c.name;
  btn.classList.add("tab-btn");
  if (!i) {
    btn.classList.add("active");
  }
  btn.setAttribute("data-id", c.name);
  btn.addEventListener("click", (e) => showContent(e.currentTarget.dataset.id));
  btnContainer.appendChild(btn);

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  if (!i) {
    contentDiv.classList.add("active");
  }
  contentDiv.id = c.name;
  const heading = document.createElement("h4");
  heading.innerText = c.name;
  const desc = document.createElement("p");
  desc.innerHTML = c.content;
  contentDiv.appendChild(heading);
  contentDiv.appendChild(desc);
  contentContainer.appendChild(contentDiv);
});

function showContent(id) {
  const btns = document.getElementsByClassName("tab-btn");
  const content = document.getElementsByClassName("content");
  for (let i = 0; i < btns.length; i++) {
    if (btns[i].getAttribute("data-id") === id) {
      btns[i].classList.add("active");
    } else {
      btns[i].classList.remove("active");
    }
  }
  for (let i = 0; i < content.length; i++) {
    if (content[i].id === id) {
      content[i].classList.add("active");
    } else {
      content[i].classList.remove("active");
    }
  }
}
