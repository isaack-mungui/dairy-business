const addInputField = (elem) => {
    if (elem.selectedIndex != 0) {
        document.getElementById("input-field").style.display = 'block';
    } else {
        document.getElementById("input-field").style.display = 'none';
    }
}

// const totalProduction = (shedA, shedB, shedC, shedD) => {
//     let production = document.getElementById("value-field");
//     for (let i = 0; i < production.length; i++) {
//         document.write(`Your production in Shed A: ${}`)
//     }
// }