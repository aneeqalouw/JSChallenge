let header = document.getElementById('heading')
header.innerHTML = 'Javascript'

let para= document.querySelector('.paragraph')
para.innerHTML = 'This is a language I have mastered and I am proud of myself. I complished this because I believed in myself'

let subHeader = document.querySelector('h3')
subHeader.textContent = 'Things Ive accomplished so far'

let para2 = document.getElementsByTagName('p')[1]
para2.innerHTML = 'I have discovered that I can accomplish anything I put my mind to'



let btnCalculate = document.querySelector('[data-calculate1]')
let span1 = document.querySelector('[data-first]')

function multiply (){
    let multiply1 = +document.querySelector('[data-firstMultiply]').value
    let multiply2 = +document.querySelector('[data-secondMultiply]').value
    let ans = multiply1*multiply2
    span1.textContent = ans
}
btnCalculate.addEventListener('click', multiply)

let btnMod = document.querySelector('#calculate2')
let span2 = document.querySelector('[data-second]')

function modulus (){
    let mod1 = +document.querySelector('[data-firstModulus]').value
    let mod2 = +document.querySelector('[data-secondModulus]').value
    let ans = mod1%mod2
    span2.textContent = ans

}
btnMod.addEventListener('click', modulus)

document.getElementById('bubbleTea').textContent = 'White Tea'
document.querySelector('.greenTea').textContent = 'Black Tea'
document.querySelector('[data-icedTea]').textContent = 'Herbal Tea'

let lastName = 'Lee'
let parentsAge = 20
let coolCars = ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']

coolCars[3] = 'Lamborghini'

for (let i=0; i<coolCars.length; i++){
    console.log(coolCars[i]);
}

console.log(coolCars.reverse());

let lastElement = coolCars.pop()

coolCars.unshift(lastElement)
console.log(coolCars);

let age = +prompt('How old are you?', 'Enter age')
let msg = document.getElementById('Ques32')

switch (true){
    case age >= 18 : msg.textContent = 'You are an adult';
    break;
    default : msg.textContent = 'Enjoy your youth!';
    break;
}

function average (mathMark=77, Physics=70, English=50){
    let added = mathMark + Physics + English
    let averageMark = Math.round(added/3)
    switch(true){
        case averageMark >80: console.log(`You did well your average was ${averageMark}`);
        break;
        case averageMark <=79: console.log(`You average was good, it was ${averageMark}`);
        break;
        case averageMark <=69: console.log(`Your average was okay, it was ${averageMark}`);
        break;
        case averageMark <=49: console.log('You must work harder next time');
        break;
    }
}
average()
let cnt = 0
while(cnt<=parentsAge){
    console.log(cnt);
    cnt++
}

let cnt2 =0
do {
    console.log(coolCars[cnt2]);
    cnt2++
}while (cnt2<coolCars.length)

let chair = {
    legs: 4,
    material: 'plastic'
}

chair.armRestBars = 'none'
console.log(chair);
console.log(chair.armRestBars);

delete chair.legs
console.log(chair);

function devices(name, type, year, description){
    return {
        name, type, year, description
    }
}

let phone = devices('Samsung','A30s', '2020', 'Android cellphone')
console.log(phone);

let pc = devices('Lenovo', 'Windows', 2011, 'Personal computer')

let tv = devices('LG', 'Flat screen', 2019, 'TV screen')

let router = devices('Telkom', 'Wifi box', 2014, 'Wifi router')

console.log(phone);
console.log(tv);
console.log(pc);
console.log(router);

function Cars (brand, model, year, transmission, drivetrains){
    this.brand = brand
    this.model = model
    this.year = year
    this.transmission =transmission
    this.drivetrains = drivetrains
}

let bmw = new Cars ('BMW', 'x3', 2011, 'Automatic','Rear-wheel')
let ford = new Cars('Ford', 'Fiesta', 2010, 'Automatic','Rear-wheel')
let toyota = new Cars('Toyota', 'Avanza', 2007, 'Manual', 'Rear-wheel')
let audi = new Cars('Audi', 'R8', 2010, 'Manual', 'Drifter')

let informationAboutCars = []
informationAboutCars.push(bmw, ford, toyota, audi)
console.log(informationAboutCars);

informationAboutCars.forEach((element, idx)=>{
    document.querySelector(`[data-car${idx+1}]`).textContent = `This car brand ${element.brand} has a model of ${element.model} that was produced in ${element.year}. It is a ${element.transmission} and is a ${element.drivetrains}`;
})

function arrCheck (){
    if (coolCars.includes('BMW')){
        console.log('This item does appear in the array');
    }else {
        console.log('This item does not appear in the array');
    }
}

arrCheck()

let numbers = [5, 18, 14, 16, 2, 1]

function middle (){
    if (numbers.length%2==0){
        let midIndex = numbers.length/2
        console.log(numbers[midIndex-1]+ ', '+ numbers[midIndex]);
    }else {
        let midIndex = Math.round(numbers.length/2)
        console.log(numbers[midIndex-1]);
    }
}

middle()



