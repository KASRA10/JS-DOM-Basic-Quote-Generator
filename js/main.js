import quotes from "./quotes.js";

document.addEventListener("DOMContentLoaded", function () {
  // Variables
  let btn = document.querySelector("#new-quote");
  let quote = document.querySelector(".quote");
  let person = document.querySelector(".person");

  // Error checking
  if (!btn || !quote || !person) {
    console.error("Required elements not found");
    return;
  }

  // Function to display a random quote
  function displayRandomQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person.toUpperCase();
  }

  // Display a random quote on **page load**
  displayRandomQuote();

  // Add event listener to button
  btn.addEventListener("click", displayRandomQuote);

  /*
  for import:
    On that class:
    export default quotes;
    on where you want import and use
    import quotes from "./quotes.js";
    script should be module as well:
    <script src="/js/main.js" type="module"></script>
  */
});
