// https://zenquotes.io/api/[mode]/[key]?option1=value&option2=value

// https://zenquotes.io/api = ZenQuotes API URL. Required.
// [mode] = Retrieval type [quotes, today, author, random]. Required.
// [key] = API key for use with premium subscriptions, be sure to obfuscate or hide this in your source code to prevent hijacking. Optional.
// [options] = Additional options. Optional.

const api_url = 'http://zenquotes.io/api/random/';

async function getapi(url){
  let response = await fetch(url, {mode: 'cors'});
  let data = await response.json();
  console.log(typeof data);
  console.log(data);
}

getapi(api_url)

// Attribution
// Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a>