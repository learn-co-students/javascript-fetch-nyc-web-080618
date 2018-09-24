const app = "I don't do much.";
const token = '53e4879d6747053a906233b31f1c8638abece563'
fetch('https://api.github.com/madtab7/repos', {
  headers: {
    Authorization:`token ${token}`
  }
})
  .then(res => res.json()).
  .then(json => console.log(json))
