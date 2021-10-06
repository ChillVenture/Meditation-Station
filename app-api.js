//fetch random quote from Go Quotes API

const api_url = 'https://goquotes-api.herokuapp.com/api/v1/random/1?type=tag&val=motivational';

async function getApi(url){
  parentEl = document.getElementById('inspQuote');
  parentEl.style.animation = '';
  
  let response = await fetch(url);
  let data = await response.json();
  let quote = data.quotes[0]
  //console.log(typeof data);
  //console.log(data);
  console.log(quote.text);
  console.log(quote.author);
  
  parentEl.innerText = quote.text;
  parentEl.cite = quote.author;
  
  parentEl.style.animation = 'inspFly 10s linear 1';

  //setTimeout(getApi, 10000, url);
}
getApi(api_url)

// Attribution
//Inspirational quotes provided by <a href="https://goquotes.docs.apiary.io/" target="_blank">Go Quotes API</a>