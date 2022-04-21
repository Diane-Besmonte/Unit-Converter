let userInput = document.getElementById("number");
let insertVal = document.getElementsByClassName("insert-val");
let val = document.querySelector('input').value;

userInput.addEventListener('input', function () {
    let mToFt = (this.value * 3.28084).toFixed(3);
    let FtToM = (this.value * 0.3048).toFixed(3);
    let litersToGal = (this.value * 0.264172).toFixed(3);
    let GalToLiters = (this.value * 3.78541).toFixed(3);
    let KilosToLbs = (this.value * 2.20462).toFixed(3);
    let LbsToKilos = (this.value * 0.453592).toFixed(3);

    insertVal[0].textContent = `${this.value} meters = ${mToFt} feet | ${this.value} feet = ${FtToM} meters`;
    insertVal[1].textContent = `${this.value} liters = ${litersToGal} gallons | ${this.value} gallons = ${GalToLiters} liters`;
    insertVal[2].textContent = `${this.value} kilos  = ${KilosToLbs} pounds | ${this.value} pounds = ${LbsToKilos} kilos`;
});

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
  });

