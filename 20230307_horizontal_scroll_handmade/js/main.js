const scroller = document.querySelector("#scroller");
const cursorDiv = document.querySelector("#cursorDiv");
const sampleScrollerElement = document.querySelector("#sampleScrollerElement");
const scrollerElements = document.getElementsByClassName("img-container");
console.log(scrollerElements);
let sx = 0;
let dx = sx;


window.addEventListener("wheel", (e) => {
  sx += e.deltaY;
  if (sx > scroller.scrollWidth) {
    sx = scroller.scrollWidth;
  } else if (sx <= 0) {
    sx = 0;
  }
});

window.requestAnimationFrame(render);
function render() {
  //We calculate our container position by linear interpolation method
  dx = li(dx, sx, 0.04);
  dx = Math.floor(dx * 100) / 100;

  if (dx > scroller.scrollWidth - sampleScrollerElement.offsetWidth) {
    dx = scroller.scrollWidth - sampleScrollerElement.offsetWidth;
  } else if (dx <= 0) {
    dx = 0;
  }

  //console.log(dx)
  scroller.scrollLeft = dx;
  //console.log(scroller.scrollWidth);

  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}

// Cursor
window.onload = () => {
  cursorDiv.classList.add("cursorDefault");
}

/*
window.addEventListener("mousemove", (e) => {
  cursorDiv.style.top = `${e.clientY - cursorDiv.offsetWidth / 2}`;
  cursorDiv.style.left = `${e.clientX - cursorDiv.offsetHeight / 2}`;
});*/

for (let i = 0; i < scrollerElements.length; i++) {
  console.log("event listeners added")
  scrollerElements[i].addEventListener("mouseenter", (e) => {
    console.log("fired " + e.type);
    cursorDiv.classList.add("cursorCta");
    cursorDiv.classList.remove("cursorDefault");
  });
  scrollerElements[i].addEventListener("mouseleave", (e) => {
    console.log("fired " + e.type);
    cursorDiv.classList.add("cursorDefault");
    cursorDiv.classList.remove("cursorCta");
  });
}