//fetch random quote from Go Quotes API

const api_url = 'https://goquotes-api.herokuapp.com/api/v1/random/1?type=tag&val=motivational';

async function getApi2(url) {
  parentEl = document.getElementById('inspQuote');
  parentEl.style.animation = '';

  //get quote from API
  let response = await fetch(url);
  let data = await response.json();
  let quote = data.quotes[0]
  
  //place quote using DOM
  parentEl.innerText = quote.text;
  parentEl.cite = quote.author;
  parentEl.style.animation = 'inspFly2 20s linear 1';

  setTimeout(getApi2, 20000, url);
}


//Attribution
//Inspirational quotes provided by <a href="https://goquotes.docs.apiary.io/" target="_blank">Go Quotes API</a>