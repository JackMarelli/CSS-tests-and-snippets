const _app = {}
_app.el = document.querySelector("#text");
_app.sample = document.querySelector("#sample");

_app.setFs = () => {
    _app.content = _app.el.textContent;
    _app.sampleWidth = _app.sample.clientWidth; //width of capital "M"
    _app.charNumber = _app.content.length;
    _app.monoCharWidth = window.innerWidth / _app.charNumber;

    console.log('_app.charNumber', _app.charNumber)
    console.log('_app.content', _app.content);

    _app.newText = document.createElement("div");
    _app.newText.style = `width: 100vw;
                          display:flex`
    for (let i = 0; i < _app.charNumber; i++) {
        let newChar = document.createElement("div");
        newChar.innerText = _app.content[i];
        newChar.style = `width: ${_app.monoCharWidth};
                         display: flex;
                         justify-content: center;
                         text-transform: capitalize;
                         font-size: ${_app.monoCharWidth}`

        _app.newText.appendChild(newChar);
    }
    _app.el.replaceWith(_app.newText);
}

window.onload = _app.setFs();
window.addEventListener("resize", _app.setFs);