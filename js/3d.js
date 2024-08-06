var ambientLight = {
    r: 90 / 256,
    g: 90 / 256,
    b: 90 / 256,
};
var lightColour = {
    r: 255 / 256,
    g: 255 / 256,
    b: 255 / 256,
};
var albedo = {
    r: 0 / 256,
    g: 0 / 256,
    b: 255 / 256,
};

document.addEventListener("mousemove", e => {
    let element = document.getElementById("tri-content");
    let originRect = element.getBoundingClientRect();
    let origin = {
        x: originRect.x + originRect.width / 2,
        y: originRect.y + originRect.height / 2,
        z: 0,
    };

    let mousePosition = {
        x: e.pageX,
        y: e.pageY,
        z: 200,
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
    };

    let angle = {
        x: Math.atan2(vector.y, vector.z),
        y: Math.atan2(vector.z, vector.x),
        z: 0,
    };
    
    element.style.transform = `rotateY(${angle.y + Math.PI + Math.PI/2}rad)`;
    element.style.transform += `rotateX(${angle.x}rad)`;

    let lightVector = {
        x: 0 - origin.x,
        y: 0 - origin.y,
        z: 200 - origin.z,
    };
    
    distance = Math.sqrt(lightVector.x * lightVector.x + lightVector.y * lightVector.y + lightVector.z * lightVector.z);

    lightVector = {
        x: lightVector.x / distance,
        y: lightVector.y / distance,
        z: lightVector.z / distance,
    };

    let dotProduct = vector.x * lightVector.x + vector.y * lightVector.y + vector.z * lightVector.z;

    let finalColour = {
        r: Math.min(256, Math.max(0, albedo.r * ambientLight.r)) + Math.min(256, Math.max(0, albedo.r * dotProduct * lightColour.r)),
        g: Math.min(256, Math.max(0, albedo.g * ambientLight.g)) + Math.min(256, Math.max(0, albedo.g * dotProduct * lightColour.g)),
        b: Math.min(256, Math.max(0, albedo.b * ambientLight.b)) + Math.min(256, Math.max(0, albedo.b * dotProduct * lightColour.b)),
    };

    
    element.style.backgroundColor = `color(srgb ${finalColour.r} ${finalColour.g} ${finalColour.b})`;

});