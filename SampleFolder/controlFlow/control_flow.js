// Step 2
let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === 'manager') {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No acess granted";
}

// Step 3
console.log("Acess Level: ", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system."
}

console.log("User Message: ", userMessage);

// Step 4
let userType = "subscriber";
let userCategory;

switch(userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default: 
        userCategory = "Unknown";
}

console.log("User Category: ", userCategory);

// Step 5
let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated": "Not authenticated";

console.log("Authentication Status: ", authenticationStatus);

// Practice Task 
console.log("==== ==== ==== ====");

const userPosEl = document.getElementById("userPos");
const messageEl = document.getElementById("message");

console.log(userPosEl.value);
console.log(messageEl.innerText);

function userChange() {
    if (userPosEl.value === 'undefined') {
        messageEl.style.color = 'red';
    } else if (userPosEl.value === 'employee') {
        messageEl.innerText = 'You are authorized to have acess to Dietary services'
    } else if (userPosEl.value === 'enrolled-member' ) {
        messageEl.innerText = 'You are authorized to have access to Dietary services and one-on-one interaction with dietician';

    } else if (userPosEl.value === 'subscriber') {
        messageEl.innerText = 'You are authorized to have partial access to facilitate "Dietary Services" only.'

    } else if (userPosEl.value === 'non-subscriber') {
        messageEl.innerText = 'You have to enroll or at least subscribe first to avail this facility.'
    }
}