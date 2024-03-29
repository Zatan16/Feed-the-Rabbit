class Ground {
    constructor(x, y, w, h) {
        var properties = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, w, h, properties);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}