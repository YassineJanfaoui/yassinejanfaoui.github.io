var config = {
    apiKey: "AIzaSyA0Kw2ZlDRX4lf5CSZvDaOBltOpS330Pmc",
    authDomain: "gomycode-web-project.firebaseapp.com",
    databaseURL: "https://gomycode-web-project.firebaseio.com",
    projectId: "gomycode-web-project",
    storageBucket: "gomycode-web-project.appspot.com",
    messagingSenderId: "246755472083"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getInputVal('name');
    var lastname = getInputVal('lastname');
    var email = getInputVal('email');
    var message = getInputVal('message');

    saveMessages(name, lastname, email, message);
    window.location.replace("HomePage.html")
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessages(name, lastname, email, message) {
    var newMessagesRef = messagesRef.push();
    newMessagesRef.set({
        name: name,
        lastname: lastname,
        email: email,
        message: message
    });
}
document.getElementById('contactForm').reset();

