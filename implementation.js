function square(n) {
  return n * n;
}

function addTwo(n) {
  return n + 2
}

function multiply(n,m){
  return n * m  
}

function subtract(n,m){
  return n - m 
}

function divide(n,m){
  return n / m 
}

function reverseString(word){
  return word.split("").reverse().join("")
}

function findLongestWord(sentance){
  words_array = sentance.split(" ")
  longest_word = words_array.reduce(function(a,b){ return a.length > b.length ? a:b })
  return longest_word

}


module.exports = {square, addTwo, multiply, subtract, divide, reverseString, findLongestWord}


