function randomNumber(max){
    return Math.floor(Math.random() * (1 + max - 1) + 1);
};

module.exports = randomNumber;
