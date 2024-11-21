// Check if a number is prime
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Find the highest lowercase alphabet
const findHighestLowercase = (data) => {
    const lowercase = data.filter((char) => char >= 'a' && char <= 'z');
    if (lowercase.length === 0) return [];
    return [lowercase.sort().pop()];
};

module.exports = {
    isPrime,
    findHighestLowercase,
};
