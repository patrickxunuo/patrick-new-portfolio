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
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Create a CSS color string using the random values
  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}

export function getRandomSign() {
  return Math.random() < 0.5 ? -1 : 1;
}
