// Add shade value input fields
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

// Add report input fields
const addIncomeReportInputField = (elem) => {
    if (elem.selectedIndex == 1) {
        document.getElementById("income-report-input-field").style.display = 'block';
    } else if(elem.selectedIndex == 2){
        document.getElementById("income-report-input-field").style.display = 'block';
    } else if(elem.selectedIndex == 3) {
        document.getElementById("income-report-input-field").style.display = 'block';
    } else if(elem.selectedIndex == 4) {
        document.getElementById("income-report-input-field").style.display = 'block';
    } else {
        document.getElementById("input-field-income-report").style.display = 'none';
    }
}

// Total Production
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
    // return production;
    console.log(`The total production is ${production} litres per day`);
}

// Income Over TIme
const incomeOverTime = (selling_price, time) => {
    // Fetch price and time from input
    selling_price = document.getElementById("input-1-price").value;
    time = document.getElementById("input-1-time").value;

    // Calculate respective incomes
    let dailyIncome = selling_price;
    let weeklyIncome = selling_price * (time / 7);
    let monthlyIncome = selling_price * (time/ 28);
    let yearlyIncome = selling_price * (time / 365);
    
    // Convert income to integer
    parseInt(dailyIncome);
    parseInt(weeklyIncome);
    parseInt(monthlyIncome);
    parseInt(yearlyIncome);

    console.log(`Your daily income will be Ksh ${dailyIncome}`);
    console.log(`Your weekly income will be Ksh ${weeklyIncome}`);
    console.log(`Your monthly income will be Ksh ${monthlyIncome}`);
    console.log(`Your yearly income will be Ksh ${yearlyIncome}`);
}
