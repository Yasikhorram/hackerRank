/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5

*/

var maxProfit = function (prices) {
  let result = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    console.log("min is", min);
    result = Math.max(result, prices[i] - min);
    console.log("result is", result);
    console.log("-----");
  }
  return result;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
