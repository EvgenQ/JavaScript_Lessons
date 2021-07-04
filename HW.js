/*
*******1. Дан код:*********
var a = 1, b = 1, c, d;
1) c = ++a; alert(c);           // 2
2) d = b++; alert(d);           // 1
3) c = (2+ ++a); alert(c);      // 5
4) d = (2+ b++); alert(d);      // 4
5) alert(a);                    // 3
6) alert(b);                    // 3
Почему код даёт именно такие результаты?

1. у переременной *а* стоит префиксный инкримент соответственно при ее первом вызове
она увеличиваеться на единицу *а=2* так как *с=а* то *с=2*

2. переменная "b" не увеличиться на 1 при первом обращении так как стоит постфиксный инкримент, она увеличеться при следующем обращении к ней поэтому alert(d) выводит 1

3. Это можно записать так "c = 2+3" так как "a" сейчас равна 2ум то в этом примере она увеличеваеться еще на 1 так как стоит префикс++
соответственно alert(c) выдает значение 5

4. "b" сейчас хранит значение 2 в примере она не увеличеться на 1 так как стоит постфикс++
соответственно это можно записать как
d = 2+2 и alert(d) выдаст 4

5. последний раз "a" увеличелась в 3 примере
ее значение было равно 3 поэтому alert(a) выдает нам тройку

6. "b" у нас увеличилась после выполнения 4 примера и значение ее до момента выполнения было равным 2 после выполнения оно будет равным 3 поэтому alert(b) выдает 3
********************************************

2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
Это можно записать как: x = 1 + (a = a * 2)
x = 5
**********************************************/

/* Задание №3*/

var a = parseInt(prompt('Введите число'));
var b = parseInt(prompt('Введите число'));
if (a > 0 && b > 0) {
    alert(a - b)
}
else if (a < 0 && b < 0) {
    alert(a * b)
}
else {
    alert(a + b)
}

/* Задание №3 ###4*/

var c = parseInt(prompt('Введите число от 0 до 15'));
switch (c) {
    case 1:
        alert('1')
    case 2:
        alert('2')
    case 3:
        alert('3')
    case 4:
        alert('4')
    case 5:
        alert('5')
    case 6:
        alert('6')
    case 7:
        alert('7')
    case 8:
        alert('8')
    case 9:
        alert('9')
    case 10:
        alert('10')
    case 11:
        alert('11')
    case 12:
        alert('12')
    case 13:
        alert('13')
    case 14:
        alert('14')
    case 15:
        alert('15')
        break;
    default:
        break;
}

/* Задание №3 ###5*/

var d = 5;
var e = 5;

function Plus(d, e) {
    //return d + e;
    result = d + e;
    return alert(result);
}

function Minus(d, e) {
    //return d - e;
    result = d - e;
    return alert(result);
}

function Devide(d, e) {
    //return d / e;
    result = d / e;
    return alert(result);
}

function Multiply(d, e) {
    //return d / e;
    result = d + e;
    return alert(result);
}

/* Задание №3 ###6*/

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'Сложить':
            resultOperation = arg1 + arg2;
            break;
        case 'Вычесть':
            resultOperation = arg1 - arg2;
            break;
        case 'Разделить':
            resultOperation = arg1 / arg2;
            break;
        case 'Умножить':
            resultOperation = arg1 * arg2;
            break;
        default:
            alert('Нет такой операции возможно где-ошибка')
            break;
    }
}

/* Задание №3 ###7*/

/* Значение null представляет отсутствие какого-либо объектного значения - то есть фактически это 'ничего', а 0 это уже кокретное значение. Я так считаю */

/* Задание №3 ###8*/

function power(val, pow) {

    if (pow <= 1) {
        return val;
    }
    else {
        return power((val + val), pow - 1)
    }
}
var value = +prompt('Введите чисто');
var valuePower = +prompt('Введите степень');
var resultPower = power(value, valuePower);
alert('Число ' + value + ' в степени ' + valuePower + ' = ' + resultPower);