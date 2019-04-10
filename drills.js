'use strict';

//Find a Book
//At first we thought maybe to go about this by splitting each of the digits and searching that way,
//but that might end up being too complicated since after the first set of digits, we'd be duplicating deweys in each
//child branch and that might cause confusion. A binary search should still be effective here since we'd be able to properly
//cut through the "dewey decimals" without having to effectively encode each digit.

//742 -> list of books => [a, b, c, d, e]
//so we're going to binary search through the digits and for loop through the array at the decimal

function deweySearch(array, dewey, title, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index]; //we're assuming each value in the dewey decimal system contains an array itself
  if (item == dewey) { // double equal instead of triple because input is string
    for(let i = 0; i < item.length; i++) {
      if (item[i] == title) {
        console.log('found book in the system!');
        return true;
      }
    }
    console.log('did not find book. try again'); //if book not found at dewey
    return false;
  } else if (item < dewey) {
    return this.deweySearch(array, dewey, index + 1, end);
  } else if (item > dewey) {
    return this.deweySearch(array, dewey, start, index - 1);
  }
}

//Searching a BST
//part 1
//in-order: 14 15 19 25 27 35 79 89 90 91
//pre-order: 35 25 15 14 19 27 89 79 91 90
//post-order: 14 19 15 27 25 79 90 91 89 35

//part 2
//post-order: 5 7 6 9 11 10 8
//pre-order: 8 6 5 7 10 9 11

//pre, post, in order functions are in BST.js

//Max Profit
function maxProfit(buyDate, prices) {
  const buyPrice = prices[buyDate];
  let profit = 0;
  for (let i = buyDate; i < prices.length; i++) {
    if(buyPrice < prices[i] && prices[i] - buyPrice > profit) {
      profit = prices[i] - buyPrice;
    }
  }
  if(profit > 0) {
    return profit;
  }
  else {
    return 'oof!';
  }
}

const XYZprices = [128, 97, 121, 123, 98, 97, 105];
console.log(maxProfit(0, XYZprices));
console.log(maxProfit(1, XYZprices));