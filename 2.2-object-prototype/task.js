function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;}
    else{
      let sound = animal.sound;
      return sound;
    }
}

function getAverageMark(marks) {
    if (marks == null || marks == undefined || marks == Number.isNaN()){
        return 0;
    }
    let average = 0;
    for (let i = 0; i < marks.length; i++){
        average += marks[i];
    }
    average = average / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    if (typeof(birthday) !== typeof(new Date())){
      return "Извините, но по закону мы обязаны проверить Ваши документы"
    }
    let now = new Date();
    birthday = new Date(birthday);
    let diff = now - birthday;
    let age = diff / 31556952000;
    console.log(age);
    if (age > 18) {
        return "Что Вам налить?"
    }else{
        return "Извините, мы не продаем алкоголь несовершеннолетним "
    }
}