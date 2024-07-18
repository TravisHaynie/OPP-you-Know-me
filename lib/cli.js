const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const { Circle, Square, Triangle } = require('./shapes');

function run() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for the logo text:',
                validate: function (value) {
                    return value.length > 0 && value.length <= 3 ? true : 'Please enter 1 to 3 characters.';
                },
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['Circle', 'Square', 'Triangle'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the shape color (keyword or hexadecimal):',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the text color (keyword or hexadecimal):',
            },
        ])
        .then(({ text, shape, shapeColor, textColor }) => {
            let shapeObj;

            if (shape === 'Circle') {
                shapeObj = new Circle(50); // Radius 50 for Circle
            } else if (shape === 'Square') {
                shapeObj = new Square(100); // Size 100 for Square
            } else if (shape === 'Triangle') {
                shapeObj = new Triangle();
            } else {
                console.log('Invalid shape selection.');
                return;
            }

            shapeObj.setColor(shapeColor);
            const svgContent = shapeObj.render(text);


            return writeFile('logo.svg', svgContent, 'utf8');
        })
        .then(() => {
            console.log('Generated logo.svg');
        })
        .catch((error) => {
            console.error('Error generating logo:', error);
        });
}

module.exports = run;