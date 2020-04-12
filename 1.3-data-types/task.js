'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    let z = new Date();
    let period = date.getMonth() - z.getMonth();
    let loanAmount = parseFloat(amount) - parseFloat(contribution);
    let s = loanAmount;
    let p = parseFloat(percent) / 12 / 100;
    let totalAmount;
    let monthlyPayment;
    let n;
    let i;
    if (z >= date) {
        return console.log("Вы ввели не верную дату");
    }
    if (isNaN(p)) {
	    return "Не корректное значение процентной ставки";
    }
    if (isNaN(contribution)) {
	   return "Не корректное значение первоначального взноса"; 
    }
    if (isNaN(amount)) {
	    return "Не корректное значение суммы кредита"; 
    }
    period = parseFloat(period);
    i = date.getFullYear() - z.getFullYear();
    if (i > 0){
      period = period + i*12;
    }
    n = period;
    monthlyPayment = s*(p+p/(((1+p)**n)-1));
    monthlyPayment = parseFloat(monthlyPayment);
    totalAmount = monthlyPayment * period;
    return parseFloat(totalAmount.toFixed(2));
}

function getGreeting(name) {
    let greeting;
    if (name == !!0 , name == undefined)
        {greeting = "Привет, мир! Меня зовут Аноним";
    }else {
        greeting = `Привет, мир! Меня зовут ${name}`
    }
    return greeting;
}   