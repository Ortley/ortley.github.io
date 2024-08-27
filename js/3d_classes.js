class vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.length = 0;
        
    };

    static zero = new vector3(0, 0, 0);
    static one = new vector3(1, 1, 1);
    static axisX = new vector3(1, 0, 0);
    static axisY = new vector3(0, 1, 0);
    static axisZ = new vector3(0, 0, 1);
};


class basis3D {
    constructor(x = vector3.axisX, y = vector3.axisY, z = vector3.axisZ) {
        this.x = x;
        this.y = y;
        this.z = z;
    };
};

class transform3D {
    x; y; z; w;
    constructor(x = vector3.axisX, y = vector3.axisY, z = vector3.axisZ, w = vector3.zero) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    };

    get basis() {
        return new basis3D(this.x, this.y, this.z);
    };
    get position() {
        return this.w;
    };

    set basis(val) {
        this.x = val.x;
        this.y = val.y;
        this.z = val.z;
    };
    set position(val) {
        this.w = val;
    };
};