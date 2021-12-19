const text = document.querySelector(".text");

const word = "Typewriter";
const display = [];
let i = 0;
startType();

function startType() {
    console.log('fn');
//   text.innerHTML = display.join("");
  if (i < word.length) {
    display.push(word[i++]);
    text.innerHTML = display.join("");
  }else{
      display.pop()
      text.innerHTML = display.join("");
    //   clearInterval(startType)?
    //   return
  }
  if(i===word.length&&display.length===0){
      i=0
  }


  setTimeout(startType, 300);
}
