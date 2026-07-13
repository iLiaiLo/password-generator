const UseCalculateEntrophy = ({ formData, range }) => {
  const { upperCase, lowerCase, number, char } = formData;

  const calculateEntrophy = () => {
    let poolSize = 0;
    const pool = [
      [upperCase, 26],
      [lowerCase, 26],
      [number, 10],
      [char, 32],
    ];

    for (let i = 0; i < pool.length; i++) {
      if (pool[i][0]) {
        poolSize += pool[i][1];
      }
    }

    const safePoolSize = poolSize || 1;
    return Math.log2(safePoolSize) * range;
  };

  const entrophy = calculateEntrophy();

  return { entrophy };
};

export default UseCalculateEntrophy;
