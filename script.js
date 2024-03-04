//functionnality 1
var footer = document.querySelector("footer");
footer.addEventListener("click", function() {
    console.log("clique");
  });

//functionnality 1bis
var clickCount = 0 ;

function clickCounter() {
    clickCount++;
    console.log("Nombre de cliques :" + clickCount);
} 
footer.addEventListener("click", clickCounter);

//functionnality 2
var hamburger = document.querySelector(".navbar-toggler")
var headerToggle = document.getElementById("navbarHeader")
function onHamburgerClick() {
    headerToggle.classList.toggle("collapse");}
hamburger.addEventListener("click", onHamburgerClick)

//functionnality 3
var card = document.querySelectorAll(".card")
var cardOne = card[0]
var editCardOne = cardOne.querySelector(".btn-outline-secondary")
function cardEditOne() {
    cardOne.style.color = "red";
}
editCardOne.addEventListener("click", cardEditOne)

//functionnality 4
var cardTwo = card[1];
var editCardTwo = cardTwo.querySelector(".btn-outline-secondary");
function onCardTwoClick() {
    if (cardTwo.style.color === "green") {
        cardTwo.style.color = "";
    } else {
        cardTwo.style.color = "green";
    }
}
editCardTwo.addEventListener("click", onCardTwoClick);
console.log(editCardTwo)

//functionnality 5
var header = document.querySelector("header")
console.log(header)

function onClickCssDestroyer() {
    var cssLink = document.querySelector("link");
    cssLink.disabled = !cssLink.disabled;
}

header.addEventListener("dblclick", onClickCssDestroyer)

//functionnality 6
card.forEach(function(card) {
    var viewButton = card.querySelector(".btn-success");
    var cardImage = card.querySelector(".card-img-top");
    var cardText = card.querySelector(".card-text");
    cardImage.originalWidth = cardImage.style.width;
    function hoverViewCard() {
        if (cardImage.style.width !== "20%") {
            cardImage.style.width = "20%";
            cardText.style.display = "none";
          } else {
            cardImage.style.width = cardImage.originalWidth;
            cardText.style.display = "block";
          }
    }
    viewButton.addEventListener("mouseover", hoverViewCard);
  });

//functionnality 7
var rotateButton = document.querySelector(".btn-secondary");
var album = document.querySelector(".album")
var container = album.querySelector(".container")
var row = container.lastElementChild
var lastCard = row.lastElementChild
function endToStart () {
    row.removeChild(lastCard)
    row.insertBefore(lastCard, row.firstElementChild)
}

rotateButton.addEventListener("click", endToStart)

//functionnality 8
var rotateButtonInverse = document.querySelector(".btn-primary")
var firstCard = row.firstElementChild
function startToEnd(event) {
    event.preventDefault();
    row.removeChild(firstCard)
    row.insertBefore(firstCard, lastCard.nextSibling)
}
rotateButtonInverse.addEventListener("click", startToEnd)

//functionnality 8
var logo = document.querySelector(".navbar-brand");

logo.addEventListener("keypress", function(event) {
    document.body.classList.remove("col-4", "offset-md-4", "offset-md-8");

    var keyPressed = event.key;

    switch(keyPressed) {
        case "a":
            document.body.classList.add("col-4");
            break;
        case "y":
            document.body.classList.add("col-4", "offset-md-4");
            break;
        case "p":
            document.body.classList.add("col-4", "offset-md-8");
            break;
        case "b":
            break;
        default:
            break;
    }
});
