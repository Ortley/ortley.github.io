start3D();

function start3D() {

    const ambientLight = {
        r: 90 / 256,
        g: 90 / 256,
        b: 90 / 256,
    };
    const lightColour = {
        r: 256 / 256,
        g: 256 / 256,
        b: 256 / 256,
    };
    const albedo = {
        r: 256 / 256,
        g: 256 / 256,
        b: 256 / 256,
    };

    const lightPosition = {
        x: 0,
        y: 0,
        z: 200,
    };

    var targetPosition = {
        x: 0,
        y: 0,
        z: 200,
    };


    var canvas = document.getElementById("3d-content");

    document.addEventListener("mousemove", (e) => {
        targetPosition.x = e.pageX;
        targetPosition.y = e.pageY;
    });

    let test = new vector3(1, 2, 3);
    console.log(test.x);
    console.log(test.length);
    
    test.x = 5;
    console.log(test.x);
    console.log(test.length);
    console.log(test.x);
    
    test.x = 6;
};