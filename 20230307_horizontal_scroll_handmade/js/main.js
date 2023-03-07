const scroller = document.querySelector("#scroller");

window.addEventListener("wheel", (e) => {
    console.log('e.deltaY', e.deltaY)
    scroller.scrollLeft += e.deltaY;
});