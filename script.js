// script.js
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;
    
    if (name && email && country) {
        alert("Your inquiry has been submitted!\nName: " + name + "\nEmail: " + email + "\nPreferred Country: " + country);
        document.getElementById("form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
