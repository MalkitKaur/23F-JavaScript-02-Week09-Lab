const output = document.getElementById('output');

// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/

// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too
function createHamburger(bun, vegetables, cheeses, sauces, meat, patties, toppings) {
    var hamburger = {
        bun: bun,
        vegetables: vegetables,
        cheeses: cheeses,
        sauces: sauces,
        meat: meat,
        patties: patties,
        toppings: toppings,
    };
    return `Delicious hamburger with ${patties} patties on a ${bun} bun, loaded with ${cheeses} cheese, ${meat} meat, ${sauces} sauce, ${vegetables}, ${toppings}. Enjoy! `;
}

var myHamburger = createHamburger(
    "sesame",
    ["lettuce", "tomato", "onion"],
    ["cheddar", "swiss"],
    ["mayo", "ketchup"],
    "beef",
    1,
    ["pickles", "olives"]
);

console.log(myHamburger); 
output.textContent=myHamburger + " Student Number - 200543614 ";



// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS