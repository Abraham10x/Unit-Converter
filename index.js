const lengthEl = document.getElementById('length')
const valueEl = document.getElementById('value')
const massEl = document.getElementById('mass')
const volumeEl = document.getElementById('volume')
const card = document.querySelector('.head-card')

valueEl.value = 0
let mainNumber = 0;
let convertMeter = 0
let convertFeet = 0
let convertPounds = 0
let convertKilos = 0
let convertGallon = 0
let convertLiters = 0

valueEl.addEventListener('input', convert)

function convert(){
    mainNumber = this.value

    if(mainNumber > 10000) {
        valueEl.value = 10000
        mainNumber = 10000
    }
    convertLenght()
    convertMass()
    convertVolume()
    //valueEl.textContent = mainNumber
    lengthEl.textContent = `${mainNumber} meters = ${convertFeet.toFixed(3)} feet | ${mainNumber} feet = ${convertMeter.toFixed(3)} meters`
    volumeEl.textContent = `${mainNumber} liters = ${convertGallon.toFixed(3)} gallons | ${mainNumber} gallons = ${convertLiters.toFixed(3)} liters`
    massEl.textContent = `${mainNumber} kilos = ${convertPounds.toFixed(3)} pounds | ${mainNumber} pounds = ${convertKilos.toFixed(3)} kilos`
}

function convertLenght() {
    convertFeet = mainNumber *  3.2808399
    convertMeter = mainNumber / 3.2808399
    return convertFeet, convertMeter
}

function convertVolume() {
    convertGallon = mainNumber / 4.546092
    convertLiters = mainNumber * 4.546092 
    return convertGallon, convertLiters
}

function convertMass() {
    convertPounds = mainNumber * 2.20462262
    convertKilos = mainNumber / 2.20462262
    return convertKilos, convertPounds
}