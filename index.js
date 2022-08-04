const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateBtn = document.getElementById('generate')
let firstPassword = document.getElementById("pass1")
let secondPassword = document.getElementById("pass2")
let decreaseBtn = document.getElementById("decrement")
let increaseBtn = document.getElementById("increment")
let lengthInput = document.getElementById("password-length")
let passwordEls = document.querySelectorAll('.password')
let popUp = document.getElementById('pop-up')


function generatePassword() {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }

    return password
}

function generatePasswords() {
    // generate a list of passwords based on the number of password elements
    let passwords = []
    for (let i = 0; i < passwordEls.length; i++) {
      let password = generatePassword()
      passwords.push(password)
    }
  
    // display the passwords on the page
    for (let i = 0; i < passwords.length; i++) {
      passwordEls[i].textContent = passwords[i]
      passwordEls[i].classList.remove('hidden')
    }
  }

function updateLength(event) {
    let number = Math.floor(event.target.value)

    if (number >= 8 && number <= 15) {
        passwordLength = number 
    } else {
        alert("Password Length has to be between 8 and 15")
    }

    event.target.value = passwordLength
}

function inputStepper(event) {
    if (event.target.id === "decrement") {
      lengthInput.stepDown()
    }
  
    if (event.target.id === "increment") {
      lengthInput.stepUp()
    }
  
    passwordLength = lengthInput.value
  }

let passwordLength = 15
lengthInput.value = passwordLength 

decreaseBtn.addEventListener('click', inputStepper)
increaseBtn.addEventListener('click', inputStepper)
lengthInput.addEventListener('blur', updateLength)

generateBtn.addEventListener('click', generatePasswords)



