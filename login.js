var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("user").value;
var password = document.getElementById("pass").value;
if ( username == "Ankit" && password == "123"){
window.location = "index.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("Incorrect password! You have "+attempt+" attempts left.");
document.getElementById("myForm").reset();
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("user").disabled = true;
document.getElementById("pass").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}