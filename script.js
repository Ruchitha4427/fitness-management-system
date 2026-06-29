function welcome(){

    alert("Welcome to Fitness Management Website!");

}

function joinNow() {
    alert("Welcome! Please complete the registration form.");
    window.location.href = "register.html";
}
function calculateBMI(){

let heightFeet = parseFloat(document.getElementById("height").value);

let height = heightFeet * 0.3048;

let weight=parseFloat(document.getElementById("weight").value);

if(height<=0 || weight<=0 || isNaN(height) || isNaN(weight)){

document.getElementById("result").innerHTML="Please enter valid values.";

document.getElementById("status").innerHTML="";

document.getElementById("recommendation").innerHTML="";

return;

}

let bmi = weight / (height * height);

alert("Height = " + height);
alert("Weight = " + weight);
alert("BMI = " + bmi);

document.getElementById("result").innerHTML="BMI : "+bmi.toFixed(1);

if(bmi<18.5){

document.getElementById("status").innerHTML="🔵 Underweight";

document.getElementById("status").style.color="blue";

document.getElementById("recommendation").innerHTML=
"Eat nutritious food.<br>Increase calorie intake.<br>Exercise regularly.<br><br><a href='workout.html'>🏋 View Workout Plan</a><br><a href='diet.html'>🥛 View Diet Plan</a>";

}

else if(bmi<25){

document.getElementById("status").innerHTML="🟢 Normal Weight";

document.getElementById("status").style.color="green";

document.getElementById("recommendation").innerHTML=
"Continue regular exercise.<br>Eat a balanced diet.<br>Drink 3 litres of water daily.<br><br><a href='workout.html'>🏋 View Workout Plan</a><br><a href='diet.html'>🥗 View Diet Plan</a>";

}

else if(bmi<30){

document.getElementById("status").innerHTML="🟠 Overweight";

document.getElementById("status").style.color="orange";

document.getElementById("recommendation").innerHTML=
"Reduce junk food.<br>Exercise for 30 minutes daily.<br>Stay hydrated.<br><br><a href='workout.html'>🏋 View Workout Plan</a><br><a href='diet.html'>🥗 View Diet Plan</a>";
}

else{

document.getElementById("status").innerHTML="🔴 Obese";

document.getElementById("status").style.color="red";

document.getElementById("recommendation").innerHTML=
"Consult a doctor.<br>Follow a healthy diet.<br>Exercise regularly.<br><br><a href='workout.html'>🏋 View Workout Plan</a><br><a href='diet.html'>🥗 View Diet Plan</a>";

}

}
function validateForm(){

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let phone=document.getElementById("phone").value.trim();

let age=parseInt(document.getElementById("age").value);

let message=document.getElementById("message");

let thankyou=document.getElementById("thankyou");

message.style.color="red";

thankyou.innerHTML="";

if(name==""){

message.innerHTML=" Please enter your name.";

return false;

}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){

message.innerHTML=" Please enter a valid email.";

return false;

}

if(phone.length!=10 || isNaN(phone)){

message.innerHTML=" Phone number must contain exactly 10 digits.";

return false;

}

if(age<15 || age>80){

message.innerHTML=" Age must be between 15 and 80.";

return false;

}

message.style.color="green";

message.innerHTML=" Registration Successful!";

thankyou.innerHTML="Thank you for joining Fitness Management System.";

return false;

}
function contactMessage(){

let name=document.getElementById("cname").value.trim();

let email=document.getElementById("cemail").value.trim();

let message=document.getElementById("msg").value.trim();

let result=document.getElementById("contactResult");

let note=document.getElementById("contactNote");

result.style.color="red";

note.innerHTML="";

if(name==""){

result.innerHTML=" Please enter your name.";

return false;

}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){

result.innerHTML=" Please enter a valid email.";

return false;

}

if(message==""){

result.innerHTML=" Please enter your message.";

return false;

}

result.style.color="green";

result.innerHTML="✅ Message Sent Successfully!";

note.innerHTML="We will contact you soon.<br>Thank you for contacting Fitness Management System.";

return false;

}