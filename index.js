const addInputField = (elem) => {
    if (elem.selectedIndex == 1) {
        document.getElementById("input-field-1").style.display = 'block';
    } else if(elem.selectedIndex == 2){
        document.getElementById("input-field-2").style.display = 'block';
    } else if(elem.selectedIndex == 3) {
        document.getElementById("input-field-3").style.display = 'block';
    } else if(elem.selectedIndex == 4) {
        document.getElementById("input-field-4").style.display = 'block';
    } else {
        document.getElementById("input-field").style.display = 'none';
    }
}


const totalProduction = () => {
    let shadeA = document.getElementById("input-1").value;
    console.log(`Your production in Shed A: ${shadeA}`);

    let shadeB = document.getElementById("input-2").value;
    console.log(`Your production in Shed B: ${shadeB}`);

    let shadeC = document.getElementById("input-3").value;
    console.log(`Your production in Shed C: ${shadeC}`);

    let shadeD = document.getElementById("input-4").value;
    console.log(`Your production in Shed D: ${shadeD}`);

    let production = parseInt(shadeA) + parseInt(shadeB) + parseInt(shadeC) + parseInt(shadeD);
    console.log(`The total production is ${production} litres per day`);
}

// Submit functionality
document.getElementById("submit").onclick = function() {
    let val = document.getElementById("")
}