const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./svgUtils');
const { Circle, Triangle, Square } = require('./shapes');

class CLI {
  constructor() {
    this.text = '';
    this.textColor = '';
    this.shape = null;
    this.shapeColor = '';
  }

  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter up to three characters for the logo text:',
          validate: (input) => input.length > 0 && input.length <= 3,
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter text color (name or hex):',
          validate: (input) => /^#([0-9A-F]{3}){1,2}$/i.test(input) || typeof input === 'string',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a shape:',
          choices: ['Circle', 'Triangle', 'Square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter shape color (name or hex):',
          validate: (input) => /^#([0-9A-F]{3}){1,2}$/i.test(input) || typeof input === 'string',
        },
      ])
      .then(({ text, textColor, shape, shapeColor }) => {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;

        switch (shape) {
          case 'Circle':
            this.shape = new Circle();
            break;
          case 'Triangle':
            this.shape = new Triangle();
            break;
          case 'Square':
            this.shape = new Square();
            break;
          default:
            throw new Error('Invalid shape selected');
        }

        return this.generateLogo();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  generateLogo() {
    this.shape.setColor(this.shapeColor);
    const svgContent = this.shape.render(this.text, this.textColor);

    return writeFile('./logo.svg', svgContent)
      .then(() => {
        console.log('Generated logo.svg');
      })
      .catch((err) => {
        console.error('Error generating logo:', err);
      });
  }
}

module.exports = CLI;