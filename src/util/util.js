export const getNewStockPrice = (value) => {
    //randomly decide the percentage between 0 to 5%
    const percentage =  Math.random() * 0.05;

    //randomly decide to increase or decrease
    const sign = Math.random() >= 0.5 ? 1 : -1;

    const movement = 1 + (sign * percentage);

    return parseFloat((value * movement).toFixed(2));
}