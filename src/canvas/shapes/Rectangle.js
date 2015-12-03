import Shape from 'canvas/shapes/Shape.js';

export default class Rectangle extends Shape {

    constructor (config) {

        super(config);

    }

    draw (ctx, i) {

        if (!this.visible)
        {
            return;
        }

        this.startDraw(ctx, i);

        let dx = this.anchor.x * -this.width;
        let dy = this.anchor.y * -this.height;

        ctx.rect(dx, dy, this.width, this.height);

        this.endDraw(ctx);

    }

}