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

consoleLogRats();
showRats();

// just loop through the books and console.log them
function consoleLogRats()
{ console.log("consoleLogRats()"); 
rats.forEach((rat) =>{console.log("Rat:", rat);});
}

// loop through the data, create an element for each one, and add it to the page
function showRats() {
console.log("showRats()");
rats.forEach((rat) => {

      // create container for each song
var mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
document.querySelector(".collection").append(mainContainer);

    var ratName = document.createElement("h2");
    ratName.classList.add("rat-name");
    ratName.innerText = rat.fields.name;
    mainContainer.append(ratName);

    var ratIdentity = document.createElement("h2");
    ratIdentity.classList.add("rat-identity");
    console.log(rat.fields)
    ratIdentity.innerText = rat.fields.ratSize;
    
    mainContainer.append(ratIdentity);

    var ratDescription = document.createElement("p");
    ratDescription.classList.add("rat-description");
    ratDescription.innerText = rat.fields.accompanyingObject;
    mainContainer.append(ratDescription);

    var ratImage = document.createElement("img");
    ratImage.classList.add("rat-image");
    ratImage.src = rat.fields.image[0].url;
    mainContainer.append(ratImage);

        // add event listener to add active class to member container
    mainContainer.addEventListener("click", function(event) {
    ratDescription.classList.toggle("active");
    ratImage.classList.toggle("active");
  });
 
});
}
}
