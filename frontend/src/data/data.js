const predefinedColors = ['black', 'blue', 'green', 'white', 'yellow', 'orange', 'red', 'purple', 'brown'];

// GENDER
const predefinedGenders = ['men', 'women', 'kids'];

// SIZES
const predefinedSizesEU = [];

for (let i = 27; i <= 49; i += 0.5) {
  const size = `EU-${i.toFixed(1)}`;
  predefinedSizesEU.push(size);
}

function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const shuffledSizesEU = shuffle(predefinedSizesEU);

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
const imageCover = '/';
const imageGallery = '/';
const tags = ['new'];

// DATA ARR
function generateShoeData() {
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const name = generateRandomShoeName();
  const price = generateRandomPrice(15, 2000);
  const color = predefinedColors[Math.floor(Math.random() * predefinedColors.length)];
  const numSizes = Math.floor(Math.random() * 15) + 2;
  const sizesEU = shuffledSizesEU.slice(0, numSizes);

  const gender = predefinedGenders[Math.floor(Math.random() * predefinedGenders.length)];
  const amountSold = generateRandomAmountSold(0, 500);
  const releaseDate = generateRandomReleaseDate();
  const quantity = Math.floor(Math.random() * 201);

  return {
    brand,
    name,
    price,
    sizesEU,
    quantity,
    color,
    amountSold,
    gender,
    imageCover,
    imageGallery,
    tags,
    releaseDate,
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

const numberOfEntries = 100; // amount of shoes
const data = generateShoeEntries(numberOfEntries);

export default data;
