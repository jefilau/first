function randomFactorPair(x) {
    const findFactors = (num) => {
      let factorPairs = [];
      for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          factorPairs.push([i, num / i]);
        }
      }
      return factorPairs;
    }
  
    if (x < 1 || !Number.isInteger(x)) {
      throw new Error('Input must be a positive integer');
    }
  
    const factorPairs = findFactors(x);
    if (factorPairs.length === 0) {
      return null; // Or handle this case as needed
    }
  
    const randomIndex = Math.floor(Math.random() * factorPairs.length);
    return factorPairs[randomIndex];
}
export default randomFactorPair;

  