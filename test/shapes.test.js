
const { Circle, Triangle } = require('../lib/shapes');
const { Square } = require('../lib/shapes');

describe("shapesColors", () => {
    describe("shape colors will be correct", () => {
        it("should render the circle,triangle,and square with the correct color", () => {
            const circle = new Circle();
            const square = new Square();
            const triangle = new Triangle();

            const shapeColor = "red";
            circle.setColor(shapeColor);
            square.setColor(shapeColor);
            triangle.setColor(shapeColor);

            expect(circle.color).toBe(shapeColor);
            expect(square.color).toBe(shapeColor);
            expect(triangle.color).toBe(shapeColor);
        });
    });
});


describe("Shapes Properties", () => {
    it("should calculate the circumference of a circle correctly", () => {
        const radius = 50;
        const expectedCircumference = 2 * Math.PI * radius;

        expect(expectedCircumference).toBeCloseTo(2 * Math.PI * radius);
    });

    it("should render the square with the correct width and height", () => {
        const width = 100;
        const square = new Square(width);

        const renderedSquare = square.render();

        expect(renderedSquare).toContain(`width="${width}"`);
        expect(renderedSquare).toContain(`height="${width}"`);
    });

    it("should render the triangle with the correct points", () => {
        const triangle = new Triangle();
        const points = "150,20 250,180 50,180";

        const renderedTriangle = triangle.render();

        expect(renderedTriangle).toContain(points);
    });
});