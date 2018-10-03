const app = "I don't do much.";

const token = 'd0ab9ce32a0f75fa24939629755d18a2390f8faa'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
