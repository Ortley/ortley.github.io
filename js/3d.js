

document.addEventListener("mousemove", e => {
    let mousePosition = {
        x: e.pageX,
        y: e.pageY,
        z: 200,
    };

    let element = document.getElementById("tri-content");
    let originRect = element.getBoundingClientRect();
    let origin = {
        x: originRect.x + originRect.width / 2,
        y: originRect.y + originRect.height / 2,
        z: 0,
    };

    let vector = {
        x: mousePosition.x - origin.x,
        y: mousePosition.y - origin.y,
        z: mousePosition.z - origin.z,
    };
    let distance = Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z)
    vector = {
        x: vector.x / distance, 
        y: vector.y / distance,
        z: vector.z / distance,
    }
    
    let lightColour = "#ffffff";
    let lightVector = {
        x: 0 - origin.x,
        y: 0 - origin.y,
        z: 0 - origin.z,
    };
    distance = Math.sqrt(lightVector.x * lightVector.x + lightVector.y * lightVector.y + lightVector.z * lightVector.z);
    lightVector = {
        x: lightVector.x / distance,
        y: lightVector.y / distance,
        z: lightVector.z / distance,
    };

    let dotProduct = vector.x * lightVector.x + vector.y * lightVector.y + vector.z * lightVector.z;

    let albedo = "#0000ff";

    let angle = {
        x: Math.atan2(vector.y, vector.z),
        y: Math.atan2(vector.z, vector.x),
        z: 0,
    };
    
    element.style.transform = `rotateY(${angle.y + Math.PI + Math.PI/2}rad)`;
    element.style.transform += `rotateX(${angle.x}rad)`;
    element.style.backgroundColor = `color-mix(in srgb, ${albedo} 100%, ${lightColour} ${dotProduct * 100}%)`

});