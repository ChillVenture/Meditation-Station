//fetch random quote from Go Quotes API

const api_url = 'https://goquotes-api.herokuapp.com/api/v1/random/1?type=tag&val=motivational';

const localPath = './assets/quotes.json'

async function getApi(url) {
  parentEl = document.getElementById('inspQuote');
  parentEl.style.animation = '';
  
  let response = await fetch(url);
  let data = await response.json();

  //---Repair code for local path use

  let motData = data.filter((quote) => quote.tag === 'motivational')

  let randIdx = Math.floor(Math.random() * motData.length);

  let quote = motData[randIdx];
  //---End repair code

  //---commented out for non-API functionality
  //let quote = data.quotes[0]
  //---
  
  parentEl.innerText = quote.text;
  parentEl.cite = quote.author;
  
  parentEl.style.animation = 'inspFly 10s linear 1';

  setTimeout(getApi, 10000, url);
}

getApi(localPath);

//Attribution
//Inspirational quotes provided by <a href="https://goquotes.docs.apiary.io/" target="_blank">Go Quotes API</a>
