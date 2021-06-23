
var temperatureCelcia = prompt("Введите температуру в градусах Цельсия");
parseInt(temperatureCelcia);
var temperatureFarinate = (9 / 5) * temperatureCelcia + 32;
alert("Темпераратура по Фарингейту = " + temperatureFarinate + "F");
var name = "Василий"
var admin = name;
alert(admin)
var num = 1000;
var num2 = '108';
var result = num + num2;
alert("Чему будет равно JS-выражение 1000 + '108'?");
alert("JS-выражение,бутет = " + result + ". Попытка представить строку как число на самом деле не имеет смысла, но число как строку — имеет, поэтому браузер довольно умно преобразует число в строку и объединяет две строки вместе.");