var ambientLight = {
    r: 90 / 256,
    g: 90 / 256,
    b: 90 / 256,
};
var lightColour = {
    r: 256 / 256,
    g: 256 / 256,
    b: 256 / 256,
};
var albedo = {
    r: 256 / 256,
    g: 256 / 256,
    b: 256 / 256,
};

var lightPosition = {
    x: 0,
    y: 0,
    z: 200,
}


document.addEventListener("mousemove", e => {
    updateAll(e);
});