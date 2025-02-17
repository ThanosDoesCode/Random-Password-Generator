const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let copiedMessageEl = document.getElementById("copied-message-id")
let passwordLengthEl = document.getElementById("password-length-el")

function generate(){
    let password1 = ""
    let password2 = ""
    let passwordLength = parseInt(passwordLengthEl.value); // Get password length from input
    
     // Ensure the length stays within limits
    if (passwordLength < 6){
        passwordLength = 6
        passwordLengthEl.value = 6
    } else if (passwordLength > 20){
        passwordLength = 20
        passwordLengthEl.value = 20
    }
    
    for (let i = 0; i < passwordLength; i++){
        let randomPass1 = Math.floor( Math.random() * characters.length )
        let randomPass2 = Math.floor( Math.random() * characters.length )
        
        password1 += characters[randomPass1]
        password2 += characters[randomPass2]
        
    }
    
    password1El.textContent = password1
    password2El.textContent = password2
}

// Function to copy password to clipboard
function copyToClipboard(id) {
    let passwordText = document.getElementById(id).textContent;
    if (passwordText) {
        navigator.clipboard.writeText(passwordText).then(() => {
            copiedMessageEl.innerHTML = "Copied!";
            setTimeout(() => (copiedMessageEl.textContent = ""), 2000);
        });
    }
}

function increment() {
    let length = parseInt(passwordLengthEl.value) || 6; // Default to 6 if empty or NaN
    if (length < 20) {
        length += 1;
        passwordLengthEl.value = length;
    }
}

function decrement() {
    let length = parseInt(passwordLengthEl.value) || 6; // Default to 6 if empty or NaN
    if (length > 6) {
        length -= 1;
        passwordLengthEl.value = length;
    }
}
