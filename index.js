const app = "I don't do much.";

fetch('https://api.github.com/repos/jquery/jquery/commits')
  .then(res => res.json())
  .then(json => let x = document.createElement('li')
    console.log(json));
