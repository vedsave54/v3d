function generatePassword() {
    var length = 12; // Default password length
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+"; // Character set for password generation
    var names = ["john", "emma", "sarah", "michael", "olivia", "david"]; // Sample names
    var password = "";

    // Add a random name from the list
    var randomName = names[Math.floor(Math.random() * names.length)];
    password += randomName;

    // Add random characters to fill the rest of the password
    for (var i = 0; i < length - randomName.length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").value = password;
}
