console.log("Hello, Airtable");

let Airtable = require("airtable");
console.log(Airtable);

let base = new Airtable({apiKey:"key3tVcwkhimDkISL"}).base("appHDwti7LHhZZBiD");

base("rats")
.select({})
.eachPage(gotPageOfRats, gotAllRats);

const rats = [];

function gotPageOfRats(records, fetchNextPage) {
  console.log("gotPageOfRats()");
rats.push(...records);
  fetchNextPage();
  }

function gotAllRats(err) {
  console.log("gotAllRats()")


if (err) {
  console.log("error loading rats");
  console.error(err);
  return;
}
// // where i change stuff
// consoleLogRats();
// try{
//   showRats();
// } catch(e) {
//   console.log(e)
// }

// function consoleLogRats() {
//   console.log("consoleLogRats()");
//   crimes.forEach(rat => {
//     console.log("Rats:",rat);
//   });

// }

// let ratContainer = document.createElement("div");
// ratContainer.classList.add()


showRats();
}



function showRats() { 
console.log("showRats()");

const collection = document.getElementById("collection");
  
rats.forEach((rat) => {
  const div = document.createElement("div");
  div.innerText = rat.fields.name;
  div.classList.add("ratExample");
  
  div.addEventListener("click", () => {
    showRats(rat, div);   
  });
  collection.appendChild(div);
  });
}

function showRat(rat, div) {
  console.log("showRat()", rat);
  
  const ratsDetail = document.getElementById("rat-detail");

  ratsDetail.getElementsByClassName("name")[0].innerText = rat.fields.name;
  ratsDetail.getElementsByClassName("image")[0].src = rat.fields.image[0].url;
  ratsDetail.getElementsByClassName("ratSize")[0].innerText = rat.fields.ratSize;             ratsDetail.getElementsByClassName("accompanyingObject")[0].innerText = rat.fields.accompanyingObject;

  const collection = document.getElementById("collection");
  const ratExamples = collection.getElementsByClassName("active");
  for (const ratExample of ratExamples){
    ratExample.classList.remove("active");

}
div.classList.add("active");

  ratsDetail.classList.remove("hidden");
}
  
