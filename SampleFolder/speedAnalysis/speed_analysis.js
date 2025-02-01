let testText = "The quick brown fox jumps over the lazy dog.";
let starTime, endTime;

function startTest() {
  // Set the test text
  document.getElementById("inputText").value = testText;

  // Reset results and timer
  document.getElementById("output").innerHTML = "";
  starTime = new Date().getTime();

  // Setting focus the userInput
  const userInput = document.getElementById("userInput");
  userInput.readOnly = false;
  userInput.focus();

  // Change button text and functionality
  var button = document.getElementById("btn");
  button.innerHTML = "End Test";
}

function endTest() {
  endTime = new Date().getTime();

  //Disable user input
  document.getElementById("userInput").readOnly = true;

  // Calculate time elapsed and words per minute (WPM)
  var timeElapsed = (endTime - starTime) / 1000; // in seconds
  var userTypedText = document.getElementById("userInput").value;

  // Split the text using regex to count words correctly
  var typedWords = userTypedText.split(/\s+/).filter(function (word) {
    return word !== "";
  }).length;

  var wpm = 0; // Default value
  if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.round((typedWords / timeElapsed) * 60);
  }

  // Display the results
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
  <p>Total Length: ${userTypedText.split(/\s+/).join("").length}</p>
  <p>Words Typed: ${typedWords}</p>
  <p>Time Elapsed: ${timeElapsed} seconds</p>
  <p>Words Per Minute (WPM): ${wpm}</p>
  `;

  // Cleanup the inputs
  cleanUpInputs();

  // Reset the button
  var button = document.getElementById("btn");
  button.innerHTML = "Start Test";
  button.onclick = startTest;
  button.focus();
}

function cleanUpInputs() {
  document.getElementById("inputText").value = "";
  document.getElementById("userInput").value = "";
}
