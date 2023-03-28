import { getRandomHexColor } from "./utils.js";

const _app = {}
_app.container = document.querySelector("#container");
_app.containerEls = document.getElementsByClassName("element");

_app.updateWindow = () => {
    for (let i = 0; i < _app.containerEls.length; i++) {
        let elWidth = _app.containerEls[i].clientWidth;
        let elHeight = _app.containerEls[i].clientHeight;
        let vpWidth = window.innerWidth;
        let vpHeight = window.innerHeight;
        let l = (vpWidth - elWidth) / (_app.containerEls.length - 1);
        let t = (vpHeight - elHeight) / (_app.containerEls.length - 1);

        _app.containerEls[i].innerHTML = `${i + 1}`;
        _app.containerEls[i].style = `top: ${t * i};
                                      left: ${l * i};
                                      background-color: ${getRandomHexColor()};`;
    }
}

_app.startUp = () => {
    _app.updateWindow();
}

_app.startUp();

window.addEventListener('resize', (e) => {
    _app.updateWindow();
}, true);