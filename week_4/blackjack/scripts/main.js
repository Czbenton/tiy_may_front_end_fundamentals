/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

function handValue(hand) {
  //take values in array and add to total
  //if values J K Q, add 10 to total
  //if total +11 > 21 then A = 1
  var total = 0;
  var aceCount = [];
  for (var i = 0; i < hand.length; i++) {
    if (Number(hand[i]) <= 10) {
      total += parseInt(hand[i]);
    } else if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
      total += 10;
    } else if (hand[i] === "A") {
      aceCount.push(hand[i]);
    }
  }

  for (var i = 0; i < aceCount.length; i++) {
    if (total + 11 >= 21) {
      total += 1;
    } else if (total + 11 <= 21) {
      total += 11;
    }
  }
  return total;
}

// console.log(handValue(["2", "2", "8"])); // 12
// console.log(handValue(["K", "K", "K"])); // 30
// console.log(handValue(["2", "2", "A"])); // 15
// console.log(handValue(["2", "A", "A"])); // 14
// console.log(handValue(["8", "A", "J"])); // 19

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
