const quotes = [
  "A rose by any other name would smell as sweet.	- William Shakespeare",
  "Ask not what your country can do for you; ask what you can do for your country. - John Kennedy",
  "Elementary, my dear Watson. - Sherlock Holmes",
  "Genius is one percent inspiration and ninety-nine percent perspiration. - Thomas Edison",
  "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
  "That’s one small step for a man, a giant leap for mankind. - Neil Armstrong",
  "The only thing we have to fear is fear itself.	- Franklin D. Roosevelt",
  "What doesn't kill us makes us stronger. - Friedrich Nietzsche",
];

function generateRandomQuote() {
  // Generate random index
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // Get the random quote
  const randomQuote = quotes[randomIndex];

  document.getElementById("quoteDisplay").textContent = randomQuote;
}
