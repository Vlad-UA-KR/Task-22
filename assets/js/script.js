// // Exercise 1 ---------------------------------------------

// let userName = prompt('Ваше имя?');

// alert('Привет' + ' ' + userName);

// // Exercise 2 ---------------------------------------------

// let yearOfBirht = +prompt('Год рождения?');

// const yearNow = 2022;

// alert('Ваш возраст =' + ' ' + (yearNow - yearOfBirht));

// // Exercise 3 ---------------------------------------------

// let length = +prompt('Длина стороны');

// let perimetr = length * 4;

// alert('Периметр квадрата =' + ' ' + perimetr);

// // Exercise 4 ---------------------------------------------

// let radius = +prompt('Радиус');

// const pi = 3.14;

// let area = pi * radius ** 2;

// alert('Площад круга =' + ' ' + area);

// // Exercise 5 ---------------------------------------------

// let length = +prompt('Расстояние между городами');

// let time = +prompt('Время за которое вы хотите преодолеть расстояние, указанное ранее');

// let speed = length / time;

// alert('Ваша скорость должна составлять =' + ' ' + speed + 'км/ч');

// // Exercise 6 ---------------------------------------------

// let uan = prompt('Колличество гривен, которое хотите обменять :')

// const uanToUsd = 29.33;

// let exchange = uan / uanToUsd;

// alert('Вы получите столько :' + ' ' + exchange.toFixed(2) + 'usd')

// // Exercise 7 ---------------------------------------------

// let userFlash = prompt('Размер вашей флешки(в гб) :');

// const file = 0.820;

// alert('На вашу флешку влезет :' + ' ' + (userFlash / file) + ' ' + 'файлов размером 820мб каждый')

// // Exercise 8 ---------------------------------------------

// let allUserMoney = prompt('Колличество денег в кошельке :');

// let chokoPrice = prompt('Цена одной шоколадки :')

// alert('Вы получите :' + ' ' + (Math.floor(allUserMoney / chokoPrice)) + ' ' + 'шоколадок');

// alert('У Вас останется :' + ' ' + (allUserMoney % chokoPrice) + 'грн');

// // Exercise 9 ---------------------------------------------

// let x = prompt('Введите трехзначное число');

// let x3 = x % 10;

// let x2 = ((x - x3) / 10) % 10;

// let x1 = (x - (x2 + "" + x3)) / 100;

// let result = `${x3}${x2}${x1}`

// alert('Вот ваше число, но задом наперед' + ' ' + result);

// // Exercise 10 ---------------------------------------------

// let userDeposit = prompt('Введите сумму депозита :');

// let userDepositTime = prompt('Введите срок депозита, но не более 1 года (в месяцах) :')

// const perYear = 5 / 100;

// const perMonth = 5 / 12 / 100;

// alert('По окончании депозита Вы получите' + ' ' + (userDeposit * (userDepositTime * perMonth)).toFixed(2) + 'грн');