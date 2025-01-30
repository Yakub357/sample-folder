let count = 0; // Initialize count to 0

function increaseCount() {
    count ++; // Increments the count by 1

    displayCount(); // Display the count
    checkCountValue(); // Check count value and display message
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instragram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instragram post gained 20 followers! Keep it up!");
        
    }
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

