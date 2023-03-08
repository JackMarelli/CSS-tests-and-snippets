const scroller = document.querySelector("#scroller");
let sx = 0;
let dx = sx;

window.addEventListener("wheel", (e) => {
  sx += e.deltaY;
  if (sx > scroller.scrollWidth) {
    sx = scroller.scrollWidth;
  } else if (sx <= 0) {
    sx = 0;
  }
  console.log(sx);
});

window.requestAnimationFrame(render);
function render() {
  //We calculate our container position by linear interpolation method
  dx = li(dx, sx, 0.05);
  dx = Math.floor(dx * 100) / 100;
  
  if (dx > scroller.scrollWidth) {
    dx = scroller.scrollWidth;
  } else if (dx <= 0) {
    dx = 0;
  }
  
  console.log(dx)
  scroller.scrollLeft = dx;
  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}
