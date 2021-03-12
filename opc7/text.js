
console.log("Jelli, Data")

let Airtable = require("airtable");
console.log(Airtable);

let base = new Airtable({apiKey: 'keyZcs7oyE8wnbvG1'}).base('applqAeZElCKdKNvh');

base("jelli").select({}).eachPage(gotPageOfJellies, gotAllJellies);

const jelli = [];

function gotPageOfJellies(records, fetchNextPage) {
    console.log("gotPageOfJellies()");
    jelli.push(...records);
    fetchNextPage();
}

function gotAllJellies(err) {
    console.log("gotAllBooks()");

    if (err) {
        console.log("can't find the jellies :(");
        console.error(err);
        return;
    }

    consoleLogJelli();
}

function consoleLogJelli() {
    console.log("consoleLogJelli()");
    books.forEach((jelli) => {
        console.log("Jelli:", jelli)
    })
}

function showJelli() {
    console.log("showJelli()");
    jelli.forEach((book) => {
        const h2 = document.createElement("h2");
        h2.innerText = jelli.feilds.title;
        document.body.appendChild(h2);
    })
}