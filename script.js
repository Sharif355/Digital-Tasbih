const subhanAllahDisplay = document.getElementById("SubhanAllah-Display")
const btnIncreaseSubhanAllah = document.getElementById("btn-increase-SubhanAllah")
const btnDecreaseSubhanAllah = document.getElementById("btn-decrease-SubhanAllah")

const alhamdulillahDisplay = document.getElementById("Alhamdulillah-Display")
const btnIncreaseAlhamdulillah = document.getElementById("btn-increase-Alhamdulillah")
const btnDecreaseAlhamdulillah = document.getElementById("btn-decrease-Alhamdulillah")

const allahuAkberDisplay = document.getElementById("AllahuAkber-Display")
const btnIncreaseAllahuAkber = document.getElementById("btn-increase-AllahuAkber")
const btnDecreaseAllahuAkber = document.getElementById("btn-decrease-AllahuAkber")

const btnReset = document.getElementById("btn-reset")

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuAkberInitialValue = 0;

btnIncreaseSubhanAllah.addEventListener("click", function () {
    if (subhanAllahInitialValue === 33) {
        return alert("You Completed SubhanAllah, please start Alhamdulillah. ")
    }
    subhanAllahInitialValue++
    subhanAllahDisplay.innerText = subhanAllahInitialValue
})
btnDecreaseSubhanAllah.addEventListener("click", function () {

    if (subhanAllahInitialValue === 0) {
        return alert("You can't add negative value")
    }
    subhanAllahInitialValue--
    subhanAllahDisplay.innerText = subhanAllahInitialValue
})

btnIncreaseAlhamdulillah.addEventListener("click", function () {
    if (alhamdulillahInitialValue === 33) {
        return alert("You Completed SubhanAllah, please start AllahuAkber. ")
    }
    alhamdulillahInitialValue++
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue
})
btnDecreaseAlhamdulillah.addEventListener("click", function () {
    if (alhamdulillahInitialValue === 0) {
        return alert("You can't add negative value")
    }
    alhamdulillahInitialValue--
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue
})
btnIncreaseAllahuAkber.addEventListener("click", function () {
    if (allahuAkberInitialValue === 34) {
        return alert("You Completed SubhanAllah, please reset to start again. ")
    }
    allahuAkberInitialValue++
    allahuAkberDisplay.innerText = allahuAkberInitialValue
})
btnDecreaseAllahuAkber.addEventListener("click", function () {
    if (allahuAkberInitialValue === 0) {
        return alert("You can't add negative value")
    }
    allahuAkberInitialValue--
    allahuAkberDisplay.innerText = allahuAkberInitialValue
})

btnReset.addEventListener("click", function () {
    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuAkberInitialValue = 0;
    subhanAllahDisplay.innerText = subhanAllahInitialValue
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue
    allahuAkberDisplay.innerText = allahuAkberInitialValue
})