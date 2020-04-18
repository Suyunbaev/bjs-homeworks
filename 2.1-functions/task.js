function getSolutions( a, b, c ) {
    let D;
    let x1;
    let x2;

    D = b**2 - 4 * a * c;
    if (D < 0) {
        return { D: D, roots: [] }
    }else if (D == 0) {
        x1 = -b / 2 * a;
        return { D: D, roots: [x1] }
    }else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return { D: D, roots: [x1, x2]};
    }
}

function showSolutionsMessage( a, b, c ) {
    result = getSolutions( a, b, c );
    console.log(result.D)
    console.log ("Вычисляем корни квадратного уравнения " + a + "x² + " + b + "x + " + c);
    console.log ("Значение дискриминанта: " , result.D);
    if (result.D < 0) {
		console.log('Уравнение не имеет вещественных корней');
	} else if (result.D == 0) {
		console.log('Уравнение имеет один корень X₁ = ' + result.roots[0]);
	} else if (result.D > 0) {
		console.log('Уравнение имеет два корня. X₁ = ' + result.roots[0] + ', ' + 'X₂ = ' + result.roots[1]);
	}
}

//Задание 2

let data = {
    algebra: [4, 5 , 3, 5, 5],
    russian: [5, 5, 4, 5, 3],
    english: [3, 5, 5, 2, 2],
    chemisty: [3, 5, 2, 2, 2],
    french: [2, 5, 2],
    poety: [5, 3, 5, 5],
    physics: [ 4, 5],
    music: [5, 5, 5, 2],
    geometry: [3, 5, 2, 2, 4],
    history: [ 3, 3, 5, 5, 5]
}

function getAverageMark(marks) {
  if (marks == 0 || marks == undefined) {
    return 0
  }
  let sumMarks = 0;
  for (let i = 0; i < marks.length; i++){
    sumMarks += marks[i];
  }
  return sumMarks / marks.length;  
  
}

function getAverageScore(data) {
  let result = { 
    average: 0 
    };
  
  if (data === undefined ) {
    return result;
    }

  let j = 0;
  let sum = 0;
 
  for (let prom in data) {
    result[prom] = getAverageMark(data[prom]);  
    sum += result[prom];
    j++;
  } 
  if (j > 0) {
    result.average = sum / j; 
    }
  return result;
  
}
console.log(getAverageScore(data))

