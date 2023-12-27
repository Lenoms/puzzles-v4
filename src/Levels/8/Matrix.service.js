const generateRandomLetters = (count) => {
  const randomLetters = [];
  for (let i = 0; i < count; i++) {
    const randomCharCode = 65 + Math.floor(Math.random() * 26);
    randomLetters.push(String.fromCharCode(randomCharCode));
  }
  return randomLetters;
};

const calculateNumberOfLetters = () => {
  const letterBoxHeight = 40;
  const letterBoxWidth = 40;

  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;

  const rows = Math.ceil(screenHeight / letterBoxHeight);
  const columns = Math.ceil(screenWidth / letterBoxWidth);

  return rows * columns;
};

export { generateRandomLetters, calculateNumberOfLetters };
