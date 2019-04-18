/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let money = 0
  let buy = prices[0]
  for (let price of prices) {
    if (price > buy) {
      money += price - buy
    }
    buy = price
  }
  return money
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
