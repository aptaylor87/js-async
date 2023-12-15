// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).




// async function logOneCard() {
//     let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
//     let deck = await axios.get(url)
//     let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.data["deck_id"]}/draw/?count=1`)
//     cardValue = res.data.cards[0].value
//     cardSuit = res.data.cards[0].suit
//     console.log(`${cardValue} of ${cardSuit}`)
// }
// logOneCard()

// Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

// Once you have both cards, console.log the values and suits of both cards.

// let baseURL = "https://deckofcardsapi.com/api/deck/"

// let cardsARR = []
// axios.get(`${baseURL}new/shuffle/?deck_count=1`)
//     .then(res => {
//         return axios.get(`${baseURL}${res.data["deck_id"]}/draw/?count=1`)
//     })
//     .then(res=> {
//         for (card of res.data.cards){
//             cardsARR.push(card)
//         }
//         return axios.get(`${baseURL}${res.data["deck_id"]}/draw/?count=1`)
//     })
//     .then(res => {
//         for (card of res.data.cards){
//             cardsARR.push(card)
//         }
//         return cardsARR
//     })
//     .then( cardsARR => {
//         for (card of cardsARR){
//             console.log(`${card.value} of ${card.suit}`)
//         }
//     }
//     )
//     .catch( err =>  console.log("Something went wrong!"))

// async function logTwoCards() {
//     let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
//     let deck = await axios.get(url)
//     let cards = []
//     for (let i = 0; i < 2; i++) {
//         let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.data["deck_id"]}/draw/?count=1`)
    
//         cardValue = res.data.cards[0].value
//         cardSuit = res.data.cards[0].suit
//         cards.push(`${cardValue} of ${cardSuit}`)
//     }
//     for (let card of cards) {
//         console.log(card)
//     }
// }
// logTwoCards()

// Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

let baseURL = 'https://deckofcardsapi.com/api/deck'


async function setup() {
    let $btn = $('button');
    let $cardArea = $('#card-area');

    let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
    $btn.show().on('click', async function() {
      let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
      let cardSrc = cardData.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randomX = Math.random() * 40 - 20;
      let randomY = Math.random() * 40 - 20;
      $cardArea.append(
        $('<img>', {
          src: cardSrc,
          css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
          }
        })
      );
      if (cardData.remaining === 0) $btn.remove();
    });
  }
  setup();
