/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100. */
var count = 2;
var x = 1;
var ddd = 0;
while (count !== 100) {
    var res = count / x;
    if (count >= 3) {
        if ((count / x) % 1 == 0 || count / x == count || count / x == 1) {
            ddd++;
        }
        if (ddd > 2) {
            count++;
            x = 0;
            ddd = 0;
        }
        if (ddd >= 2 && x == count) {
            console.log(count);
            count++;
            x = 0;
            ddd = 0;
        }
        x++;
    }
    else {
        console.log(count);
        count++;
    }
}

/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. */

var listProduct = [{ name: 'Лодка', price: 12000 },
{ name: 'Катер', price: 19000 },
{ name: 'Лодка электро-мотор', price: 23000 },
{ name: 'Катер электро', price: 31000 }];

var shoppingBasket = [];
var list = '';
var numberList = 0;

alert('Выбирете товары из списка.')

listProduct.forEach(nameProduct => {

    list += `${++numberList} - ${nameProduct.name}: ${nameProduct.price}p,\n`;
})
var exit = false;
while (!exit) {
    var numberProduct = +prompt(`${list} Введите номер товара. Закончив покупки введите 0'`)
    switch (numberProduct) {
        case 1:
        case 2:
        case 3:
        case 4:
            shoppingBasket.push(listProduct[--numberProduct]);
            break;
        case 0:
            if (shoppingBasket.length === 0) {

                alert('Вы не выбрали товар.Корзина пуста');

            }
            else {
                exit = true;
                var sum = 0;
                numberList = 0;
                var ListTotalPrice = '';
                for (let index = 0; index < shoppingBasket.length; index++) {

                    sum += shoppingBasket[index].price;
                    ListTotalPrice += `${++numberList} - ${shoppingBasket[index].name}: ${shoppingBasket[index].price}p,\n`;
                }
                alert(`Спасибо что посетили наш магазин. Товаров в корзине : ${shoppingBasket.length}\n${ListTotalPrice}\n на сумму ${sum}р`)
            }
            break;
        default:
            alert('Нет товара с таким номером. Введите корректные данные')
            break;
    }
}


/* 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто} */

for (let index = 0; index <= 9; console.log(index++)) {

}

/* 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5: */

var pyramid = '';
for (var i = 0; i <= 20; i++) {
    pyramid += '*';
    console.log(pyramid);
}