const predefinedColors = ['black', 'blue', 'green', 'white', 'yellow', 'orange', 'red', 'purple', 'brown'];

// GENDER
const predefinedGenders = ['men', 'women', 'kids'];

// SIZES
const predefinedSizesEU = [
  'EU 22',
  'EU 23',
  'EU 24',
  'EU 25',
  'EU 26',
  'EU 27',
  'EU 28',
  'EU 29',
  'EU 30',
  'EU 31',
  'EU 32',
  'EU 33',
  'EU 34',
  'EU 35',
  'EU 36',
  'EU 37',
  'EU 38',
  'EU 39',
  'EU 40',
  'EU 41',
  'EU 42',
  'EU 43',
  'EU 44',
  'EU 45',
];

const brands = [
  'Vans',
  'Adidas',
  'Nike',
  'Reebok',
  'Puma',
  'Converse',
  'Under Armour',
  'Skechers',
  'Asics',
  'Fila',
  'Lacoste',
  'Salomon',
  'Merrell',
  'Etnies',
  'K-Swiss',
  'Timberland',
  'Onitsuka Tiger',
  'Columbia',
  'Mizuno',
  'Hoka One One',
  'Vivobarefoot',
  'Diadora',
  'Sperry',
  'Birkenstock',
  'Bally',
  'Balenciaga',
  'Fendi',
  'Versace',
  'Yeezy',
  'Valentino',
  'Givenchy',
];

// PRICE
function generateRandomPrice(min, max) {
  const randomPrice = Math.floor(Math.random() * ((max - min) / 0.05 + 1)) * 0.05 + min;
  return randomPrice.toFixed(2);
}

// AMOUNT OF SOLD
function generateRandomAmountSold(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// NAME
function generateRandomShoeName() {
  const words = [
    'Sport',
    'Running',
    'Casual',
    'Fashion',
    'Comfort',
    'Classic',
    'Outdoor',
    'Trail',
    'Walking',
    'AUTHENTIC',
    'LOW SP',
    'Mid',
    'Low',
    '1',
    'MAX',
    'Retro',
    `'01`,
    'Force',
    'DUNK',
    '720',
    '550',
    'Half',
  ];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomWords = Array.from(
    { length: getRandomInt(2, 3) },
    () => words[Math.floor(Math.random() * words.length)]
  );
  return randomWords.join(' ');
}

// DATA ARR
function generateShoeData() {
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const name = generateRandomShoeName();
  const price = generateRandomPrice(15, 2000);
  const color = predefinedColors[Math.floor(Math.random() * predefinedColors.length)];
  const numSizes = Math.floor(Math.random() * 15) + 2;
  const sizesEU = Array.from(
    { length: numSizes },
    () => predefinedSizesEU[Math.floor(Math.random() * predefinedSizesEU.length)]
  );
  const gender = predefinedGenders[Math.floor(Math.random() * predefinedGenders.length)];

  const amountSold = generateRandomAmountSold(0, 500);

  const releaseDate = generateRandomReleaseDate();

  return {
    releaseDate,
    brand,
    name,
    price,
    color,
    sizesEU,
    gender,
    amountSold,
  };
}

// RELEASE DATE
function generateRandomReleaseDate() {
  const year = getRandomInt(2000, 2024);
  const month = getRandomInt(1, 12);
  const day = getRandomInt(1, 28);

  return `${year}-${padZero(month)}-${padZero(day)}`;
}

function padZero(num) {
  return num < 10 ? `0${num}` : num;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateShoeEntries(numEntries) {
  const shoeEntries = [];

  for (let i = 0; i < numEntries; i++) {
    shoeEntries.push(generateShoeData());
  }

  return shoeEntries;
}

const numberOfEntries = 10; // amount of shoes
const data = generateShoeEntries(numberOfEntries);

export default data;
