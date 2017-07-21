//console.log("Up and running!");
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);
var cards =
[
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];
var checkForMatch = function()
{
    if (cardsInPlay.length === 2)
    {
      if (cardsInPlay[0]=== cardsInPlay[1])
      {
        alert("You found a match!");
        cardsInPlay = [];
      }
      else
      {
        alert("Sorry, try again.");
        cardsInPlay = [];
      }
    }
}
var flipCard = function()
{
  var cardId = this.getAttribute('data-id');
  console.log(cards[cardId].cardImage)
  this.setAttribute('src', cards[cardId].cardImage);
  // console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  setTimeout(checkForMatch, 200);
  // console.log(cards[cardId].cardImage);
  // console.log(cards[cardId].suit);
}
var createBoard = function()
{
  for (var i =0 ; i < cards.length; i++)
  {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}
createBoard();
// Create a button element, a click event, and a callback function that resets the cards
/*var button = document.createElement('button');
button.textContent = 'Play again!';
document.getElementById('game-board').appendChild(button);
button.style.display = 'block'; */

var resetCards = function()
{
  for (var i =0 ; i < cards.length; i++)
  {
    var pictures = document.querySelectorAll('img');
    pictures[i].setAttribute('src', 'images/back.png');
  }
  cardsInPlay = [];
}
var button = document.querySelector('button');
button.addEventListener('click', resetCards);
console.log(button);
