function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }
  function compareArrays( arr1, arr2 ) {
    if (arr1.length === arr2.length) {
      let check = arr1.every(function (value, index) {
        console.log(value);
        console.log(index);
        return value === arr2[index];
      }
      );
      return check;
    }
    else{
      return false;
    }
  }
  function compareArrays( arr1, arr2 ) {
    if (arr1.length === arr2.length) {
      let check = arr1.every(function (value, index) {
        console.log(value);
        console.log(index);
        return value === arr2[index];
      }
      );
      return check;
    }
    else{
      return false;
    }
  }

  function memorize(fn, limit) {
    let memory = []; 
    
    return function (...args) {
      let found = memory.find(value => compareArrays(value.args, args));
  
      if (found) {
        console.log('from memory');
        return found.result;
      }
      let result = fn(...args);
  
      memory.push({
        args: args,
        result: result
      });
      if (memory.length > limit) {
        memory.shift();
      }
      return result;
    }
  }
  
  const mSum = memorize(sum, 5);
  
  console.log(mSum(6,5));
  console.log(mSum(2,5));
  
  const testArray = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];

  function testCase(testFunction, timer) {
    console.time(timer);
     testArray.forEach(function(arr){
      for (let i = 0; i < 10; i++) {
          testFunction(...arr);
      }
    });
      console.timeEnd(timer);
  }
  
  testCase(mSum, 'withMem');
  testCase(sum, 'withoutMem');