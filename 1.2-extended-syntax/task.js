'use strict';
function getResult(a,b,c){
    let x = [];
    let d = b ** 2 - 4 * a * c;

	if (d === 0) {
        x[0] = (-b + Math.sqrt(d)) / (2 * a);   
    }else if (d > 0) {
	    x[0] = (-b + Math.sqrt(d)) / (2 * a);
	    x[1] = (-b - Math.sqrt(d)) / (2 * a);
    }
    
    return x;
}

function getAverageMark(marks){
    let averageMark = 0;
    let i = 0;
    let sumPoints = 0;
    let marksFix = marks.slice(0, 5);
    if (marks.length == 0) {
      return 0; 
    } 
  
    
    while (i < marksFix.length) {
        sumPoints = sumPoints + marksFix[i];
        i++;
    }averageMark = sumPoints / marksFix.length; 
    
    return averageMark;
  }



function askDrink(name,dateOfBirthday){
    let year = new Date().getFullYear();
	let age = year - dateOfBirthday.getFullYear();
	if (age < 18) {
		return ("Сожалею, " + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!")
	} 
	return ("Не желаете ли олд-фэшн, " + name + "?")
  
}