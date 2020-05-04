function parseCount(quantity){
  let testNaN = Number.parseInt(quantity)
  if (testNaN != testNaN || Number.parseInt(quantity) <= 0){
    let quantityError = new Error("Невалидное значение");
    throw quantityError;
  }
  return Number.parseInt(quantity);
}


function validateCount(quantity){
    try{ 
       return parseCount(quantity);
    }
    catch(Err){
     return Err
    }
 };
 
 

 class Triangle { 
    constructor(a, b, c) {
      this.a = Number.parseFloat(a);
      this.b = Number.parseFloat(b);
      this.c = Number.parseFloat(c);
      if ((this.a + this.b <= this.c)  || (this.b + this.c <= this.a) || (this.a + this.c <= this.b) || (this.a <= 0) || (this.b <= 0) || (this.c <= 0)){
        throw new Error("Треугольник с такими сторонами не существует"); 
      }
    }
  
    getPerimeter() {
      return Number.parseFloat((this.a + this.b + this.c).toFixed(3)); 
    }
   
    getArea() {
      let p = (this.a + this.b + this.c) / 2;
      return Number.parseFloat(((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5).toFixed(3)); 
    } 
  }
  
  function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(err) {
        let object = {};
		object.getPerimeter = object.getArea = () => 'Ошибка! Неправильный треугольник';
		return object;
    }
  }