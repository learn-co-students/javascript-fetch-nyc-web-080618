const app = "I don't do much.";

let main = document.getElementById("main");

fetch("https://api.github.com/repos/jquery/jquery/commits")
.then(res => res.json())
.then(json => {
  console.log(json);
  return cb(json);
})

function cb(json){
  return json.map(repo => {
    pTag = document.createElement("p");
    pTag.innerHTML = repo.url;
    main.appendChild(pTag);
  })
}
