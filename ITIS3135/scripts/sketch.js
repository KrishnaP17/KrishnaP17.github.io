

let moves = [];
let liquid;

function setup() {
    createCanvas(400, 400);
    reset();
    liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
}

function draw() {
    background(230);
    liquid.display();
    for (let i = 0; i < moves.length; i++) {
        if (liquid.contains(moves[i])) {
            let force = liquid.calculateDrag(moves[i]);
            moves[i].applyForce(force);
        }
        let gravity = createVector(0, 0.1 * moves[i].mass);
        moves[i].applyForce(gravity);

        moves[i].update();
        moves[i].display();
        moves[i].checkEdges();
    }
}

function mousePressed() {
    reset();
}

function reset() {
    moves = []; // Clear the moves array before adding new movers
    for (let i = 0; i < 9; i++) {
        moves.push(new Mover(random(0.5, 3), 40 + i * 70, 0));
    }
}

class Liquid {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }

    contains(m) {
        let l = m.position;
        return (
            l.x > this.x &&
            l.x < this.x + this.w &&
            l.y > this.y &&
            l.y < this.y + this.h
        );
    }

    calculateDrag(m) {
        let speed = m.velocity.mag();
        let dragMagnitude = this.c * speed * speed;
        let dragForce = m.velocity.copy();
        dragForce.mult(-1);
        dragForce.normalize();
        dragForce.mult(dragMagnitude);
        return dragForce;
    }

    display() {
        noStroke();
        fill(20);
        rect(this.x, this.y, this.w, this.h);
    }
}

class Mover {
    constructor(m, x, y) {
        this.mass = m;
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    display() {
        stroke(0);
        strokeWeight(2);
        fill(255,69,0);
        ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
    }

    checkEdges() {
        if (this.position.y > height - this.mass * 8) {
            this.velocity.y *= -0.9;
            this.position.y = height - this.mass * 8;
        }
    }
}