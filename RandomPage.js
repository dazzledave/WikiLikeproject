// Generate random number within total entries count
var randomIndex = Math.floor(Math.random() * numberOfEntries);
// Redirect user to the randomly chosen entry page
window.location.href = "/article/" + entriesList[randomIndex].id;
