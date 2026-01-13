function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-theme");
}
    function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-theme");
} // <--- changeMode ko YAHAN band kar dein

// Ab sendMessage ko alag se banayein
function sendMessage() {
    alert("Thank you! your data has been sent. ✅");
}

function togglePassword() {
    // 1. Hum password wale dabbe ko dhoond rahe hain
    var passBox = document.getElementById("myPass");

    // 2. Check kar rahe hain: Kya password chupa hua hai?
    if (passBox.type === "password") {
        passBox.type = "text";  // Agar haan, toh dikha do (Text bana do)
    } else {
        passBox.type = "password"; // Agar nahi, toh wapas chupa do
    }
}
function changeText() {
    // 1. Button ko dhoond rahe hain
    var btn = document.getElementById("myBtn");

    // 2. Text ko badal kar 'Submitted' kar rahe hain
    btn.innerText = "Submitted ✅";

    // 3. (Optional) Rang bhi Green kar dete hain
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
}
function toggleTheme() {
    // 1. Body element ko pakadte hain
    var body = document.body;

    // 2. 'dark-theme' class ko add ya remove karte hain
    body.classList.toggle("dark-theme");
}

function sendMessage() {
    // 1. Ek Popup box dikhayega
    alert("Thank you! Your message has been sent. ✅");
    
    // (Optional) Form ko wapas saaf karne ke liye
    // document.querySelector("form").reset(); 
}

