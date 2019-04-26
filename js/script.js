/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
//variables

let quotes;
let randomNum;
let randomQuote;
let quotesLength;
let htmlString;


//array of quote objects 
quotes = [
  {
    quote:'We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.',
    source: 'Ellen Ullman'
  },
  {
    quote: 'What one programmer can do in one month, two programmers can do in two months. ',
    source: 'Fred Brooks'
  },
  {
    quote: 'A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.',
    source: 'Niklaus Wirth'
  },
  {
    quote: 'No one in the brief history of computing has ever written a piece of perfect software. It\'s unlikely that you\'ll be the first.',
    source: 'Andy Hunt'
  },
  {
    quote: 'Java is to JavaScript as ham is to hamster.',
    source: 'Jeremy Keith'
  },
  {
    quote: 'One of the best programming skills you can have is knowing when to walk away for awhile.',
    source: 'Oscar Godson'
  },
  {
    quote: 'Without requirements or design, programming is the art of adding bugs to an empty text file.',
    source: 'Louis Srygley'
  },
  {
    quote: 'Any man who must say \'I am the King\' is no true King.',
    source: 'Tywin Lannister',
    citation: 'Game of Thrones',
    year:  2013
  },
  {
    quote: 'It\'s the family name that lives on. It\'s all that lives on.',
    source: 'Tywin Lannister',
    citation: 'Game of Thrones',
    year: 2011
  }

]

//console.log(quotes)


//it gets the quotes length
quotesLength = quotes.length;
//it gives Random Quotes 
 
function getRandomQuote (){
  randomNum = Math.floor(Math.random() * quotesLength);
  return quotes[randomNum];
}
//console.log(getRandomQuote())

//it prints the quotes


function printQuote() {
  randomQuote = getRandomQuote(); 
  htmlString = '';
  htmlString += '<p class="quote">' + randomQuote.quote + '</p>'; 
  htmlString += '<p class="source">' + randomQuote.source;
  if ( randomQuote.citation) {
    htmlString += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    htmlString += '<span class="year">' + randomQuote.year + '</span>';
  }
  htmlString += '</p>';
  setTimeout(printQuote, 20000);

  document.getElementById("quote-box").innerHTML = htmlString;
  

  return htmlString;

}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


