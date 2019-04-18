/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  let buy = prices[0] //买入
  let maxprofit = 0 //最大利润
  for (let price of prices) {
    buy = Math.min(buy, price)
    maxprofit = Math.max(maxprofit, price - buy)
  }
  // for (let i = 0; i < prices.length; i++) {
  //   for (let j = i + 1; j < prices.length; j++) {
  //     let profit = prices[j] - prices[i]
  //     if (profit > maxprofit) {
  //       maxprofit = profit
  //     }
  //   }
  // }
  return maxprofit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
