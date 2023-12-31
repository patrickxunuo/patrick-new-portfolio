export interface Position {
  x: number;
  y: number;
}

export function getWindowsDimension(dimension?: number): Position {
  return dimension
    ? {
        x: window.innerWidth + dimension,
        y: window.innerHeight + dimension,
      }
    : {
        x: window.innerWidth,
        y: window.innerHeight,
      };
}

export function getRandomInteger(min: number, max: number) {
  min = Math.floor(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateBallInitialX() {
  const { x } = getWindowsDimension();
  return getRandomInteger(x / 4, (3 * x) / 4);
}

export function generateBallInitialY() {
  const { y } = getWindowsDimension();
  return getRandomInteger(y / 4, (3 * y) / 4);
}

export function isOutOfRangeX(dimension: number, currentX: number) {
  const { x } = getWindowsDimension(dimension);
  return currentX < -dimension || currentX > x;
}

export function isOutOfRangeY(dimension: number, currentY: number) {
  const { y } = getWindowsDimension(dimension);
  return currentY < -dimension || currentY > y;
}

export function getRandomInitial() {
  return {
    x: generateBallInitialX(),
    y: generateBallInitialY(),
  };
}

export function getRandomDestination(dimension: number) {
  const { x, y } = getWindowsDimension(dimension);
  return getRandomSign() === 1
    ? {
        x: getRandomSign() === 1 ? x + dimension : -dimension,
        y: getRandomInteger(-dimension, y),
      }
    : {
        x: getRandomInteger(-dimension, x),
        y: getRandomSign() === 1 ? y + dimension : -dimension,
      };
}

export function generateRandomColor() {
  // Generate random values for red, green, and blue channels
  const red = Math.floor(Math.random() * 128 + 128); // Range: 128-255
  const green = Math.floor(Math.random() * 128 + 128); // Range: 128-255
  const blue = Math.floor(Math.random() * 128 + 128); // Range: 128-255

  // Convert the decimal color values to hexadecimal
  const hexRed = red.toString(16).padStart(2, "0");
  const hexGreen = green.toString(16).padStart(2, "0");
  const hexBlue = blue.toString(16).padStart(2, "0");

  // Create a CSS color string using the hexadecimal values
  const color = `#${hexRed}${hexGreen}${hexBlue}`;

  return color;
}

export function getRandomSign() {
  return Math.random() < 0.5 ? -1 : 1;
}

export function rotateElement(event: MouseEvent, element: HTMLDivElement) {
  // get mouse position
  const x = event.clientX;
  const y = event.clientY;
  // console.log(x, y)

  // find the middle
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;
  // console.log(middleX, middleY)

  // get offset from middle as a percentage
  // and tone it down a little
  const offsetX = ((x - middleX) / middleX) * 20;
  const offsetY = ((y - middleY) / middleY) * 20;
  // console.log(offsetX, offsetY);

  // set rotation
  element.style.setProperty("--rotateX", offsetX + "deg");
  element.style.setProperty("--rotateY", -1 * offsetY + "deg");
}
