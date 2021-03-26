const recipe = {

    "@context": "https://schema.org",
    "@type": "Recipe",
    "me": "anais",
    "fromage": "Fromage Blanc + Coulis de Framboises",
    "miam": "In four small bowls/glasses divide up equally the fromage blanc and smooth the tops \n \n In a seperate saucepan add the rasberries, honey, lemon juice, and pinch of salt \n \n Let ingredients come to a simmer, and let liquid evaporate for about 8 minutes \n \n Remove coulis from heat and cool. Once cool, top the bowls of fromage blanc with the coulis and serve",
    "tout": "400g fromage blanc \n (I prefer goat milk fromage blanc) \n  280g rasberries \n  140g honey \n a pinch of salt \n 1 lemon juiced",
    "people":"4 persons \n 20 minutes",
    "delice":"!MIAM!",
}

const titleElement =
document.getElementById("title");

titleElement.innerText =
recipe.fromage

const recetteElement =
document.getElementById("recette");

recetteElement.innerText =
recipe.miam

const ingredientsElement =
document.getElementById("ingredients");

ingredientsElement.innerText =
recipe.tout

const yeildElement =
document.getElementById("yeild");

yeildElement.innerText =
recipe.people

const authorElement =
document.getElementById("author");

authorElement.innerText =
recipe.me

const deliciousElement =
document.getElementById("delicious");

deliciousElement.innerText =
recipe.delice







