// Before a credit card is submitted to a financial institution, it generally
// makes sense to run some simple reality checks on the number.
// The numbers are a good length and it's common to make minor
// transcription errors when the card is not scanned directly.

// The first check people often do is to validate that the card
// matches a known pattern from one of the accepted card providers.

// Here's how to validate if a card is valid or not:

// - Starting with the first digit and continuing with every other digit, multiply by 2
// - Sum all doubled and untouched digits in the number
// - If that sum is a multiple of 10, the number is valid

// For example, given the card number 4408 0412 3456 7893:

// Step 0: 4 4 0 8 0 4 1 2 3 4 5  6 7  8 9  3
// Step 1: 8 4 0 8 0 4 2 2 6 4 10 6 14 8 18 3
// Step 2: 8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70
// Step 3: 70 % 10 == 0

// That card is valid.

// One more example, 4417 1234 5678 9112:

// Step 0: 4 4 1 7 1 2 3 4 5  6 7  8 9  1 1 2
// Step 1: 8 4 2 7 2 2 6 4 10 6 14 8 18 1 2 2
// Step 2: 8+4+2+7+2+2+6+4+1+0+6+1+4+8+1+8+1+2+2 = 69
// Step 3: 69 % 10 != 0

// Write a function `isValidCC(ccnum)` that takes a string and
// returns `true` if the credit card entered is valid, `false` otherwise.

function isValid(ccnum) {
  var credit_card_num = [];
  for (var i = 0; i < ccnum.length; i++) {
    if (ccnum[i] != " ") {
      credit_card_num.push(parseInt(ccnum[i]));
    }
  }
  console.log(credit_card_num);
  var doubleNums = [];

  for (var i = 0; i < credit_card_num.length; i++) {
    if (i % 2 === 0) {
      doubleNums.push(credit_card_num[i] * 2);
    } else {
      doubleNums.push(credit_card_num[i]);
    }
  }

  console.log(doubleNums);

  var total = 0;
  for (var i = 0; i < doubleNums.length; i++) {
    total += doubleNums[i];
  }

  console.log(total);
}

// tests
// ---
console.assert(isValid("4408 0412 3456 7893") === false);
console.assert(isValid("5000000000000000") === false);
