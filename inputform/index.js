const fnameEl = document.getElementById("fname")
const lnameEl = document.getElementById("lname")
const welcomeEl = document.getElementById("welcome-message")
const submitBtn = document.getElementById("submit-button")

submitBtn.addEventListener("click", function (e) {
    welcomeEl.textContent = 
        `Welcome ${fnameEl.value} ${lnameEl.value} to the baking game!`;
    welcomeEl.style.display = "block";
    e.preventDefault();    
})