var deckOfNumbers = []
var lengthArray = 51

for (var i = 0; i <= lengthArray; i++) {
  deckOfNumbers.push(i)
}
console.log('original deckOfNumbers: ')
console.log(deckOfNumbers)

function shuffleNums (deckOfNumbers) {
  var shuffled = []
  for (var j = 0; j < deckOfNumbers.length; j++) {
    wait(deckOfNumbers[j], function (output) {
      shuffled.push(output)
      if (shuffled.length === deckOfNumbers.length) {
        console.log('shuffled: ')
        console.log(shuffled)
      }
    })
  }
}

function wait (x, Callback) {
  var tempR = Math.random() * 250
  setTimeout(function () { Callback(x) }, tempR)
}

shuffleNums(deckOfNumbers);