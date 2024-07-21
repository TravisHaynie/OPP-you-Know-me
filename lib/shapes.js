class Circle {
    constructor(radius) {
        this.radius = radius;
        this.color = 'black'; // Default color
        this.backgroundColor = 'white';
        this.textColor = 'black';
    }

    setColor(color) {
        this.color = color;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }

    setBackgroundColor(color) {
        this.backgroundColor = color;
    }

    render(text) {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect  fill="${this.backgroundColor}" />
                <circle cx="155" cy="100" r="${this.radius}" fill="${this.color}" />
                <text x="145" y="105" fill="${this.textColor}">${text}</text>
              </svg>`;
    }
}

class Square {
    constructor(size) {
        this.size = size;
        this.color = 'black'; // Default color
        this.backgroundColor = 'red';
        this.textColor = 'black';
    }

    setColor(color) {
        this.color = color;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    setBackgroundColor(color) {
        this.backgroundColor = color;
    }

    render(text) {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="200" fill="${this.backgroundColor}" />
                <rect x="100" y="50" width="${this.size}" height="${this.size}" fill="${this.color}" />
                <text x="140" y="105" fill="${this.textColor}">${text}</text>
              </svg>`;
    }
}

class Triangle {
    constructor() {
        this.color = 'black'; // Default color
        this.backgroundColor = 'white';
        this.textColor = 'black';
    }

    setColor(color) {
        this.color = color;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    setBackgroundColor(color) {
        this.backgroundColor = color;
    }

    render(text) {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="200" fill="${this.backgroundColor}" />
                <polygon points="150,20 250,180 50,180" fill="${this.color}" />
                <text x="140" y="120" fill="${this.textColor}">${text}</text>
              </svg>`;
    }
}

module.exports = { Circle, Square, Triangle };