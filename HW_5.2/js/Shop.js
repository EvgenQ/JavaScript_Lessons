// Доработать реализацию кнопки "Купить", на данный момент она не работает так как не пойму как по клику получить нужный мне блок где содержиться товар 
var shop = {
    catalogProducts: [
        { name: 'Картофель', price: 200, pieces: 50 },
        { name: 'Бананы', price: 150, pieces: 50 },
        { name: 'Свекла', price: 85, pieces: 50 }]
};
var productsIntheBasket = {
    product: [
        { name: 'Картофель', piecesIntheBasket: 0 },
        { name: 'Бананы', piecesIntheBasket: 0 },
        { name: 'Свекла', piecesIntheBasket: 0 }]
};
var startShop = start();
function start(){
    for(var i = 0; i < shop.catalogProducts.length; i++){

        var blockRow = document.createElement('div');
        blockRow.id = `${shop.catalogProducts[i].name}`;
        blockRow.className = 'containerGeneral';
        document.body.appendChild(blockRow);
    
        createCol();
        function createCol(){
            var col = document.createElement('div')
            col.className = 'col';
            blockRow.appendChild(col);
    
            var blockProduct = document.createElement('div')
            blockProduct.className = 'product';
            blockProduct.innerText = `${shop.catalogProducts[i].name}`;
            col.appendChild(blockProduct);
    
            var blockPrice = document.createElement('div');
            blockPrice.className = 'price';
            blockPrice.innerHTML = `${shop.catalogProducts[i].price}`;
            col.appendChild(blockPrice);
    
            var buttonBuy = document.createElement('button');
            buttonBuy.className = 'Btn';
            buttonBuy.type = 'button';
            buttonBuy.onclick = Add;

            buttonBuy.innerText = 'Купить';
            col.appendChild(buttonBuy);

        }
    }
}
var buttonCompleteShopping = document.createElement('button');
buttonCompleteShopping.className = 'BtnComleted';
buttonCompleteShopping.type = 'button';
buttonCompleteShopping.onclick = TotalPrice;
buttonCompleteShopping.innerText = 'Завершить покупку';
document.body.appendChild(buttonCompleteShopping);

var checkIfZero = 0;
for(var j = 0; j < productsIntheBasket.product.length; j++){

    checkIfZero += productsIntheBasket.product[j].piecesIntheBasket;
}
if(checkIfZero === 0){
    var totalPrice = document.createElement('div')
        totalPrice.className = 'ShowTotalPrice';
        totalPrice.innerText = 'Корзина пуста';
        document.body.appendChild(totalPrice);
}
else{TotalPrice()}


// не реализованно внутри старая реализация
function Add(productId) {
    for (var j = 0; j < productsIntheBasket.product.length; j++) {
        if (productsIntheBasket.product[j].name == productId) {

            productsIntheBasket.product[j].piecesIntheBasket++;
            shop.catalogProducts[j].pieces--;
        }
    }
}
function TotalPrice() {
    var sum = 0
    var numberProducts = 0;
    var htmlDoc = '';
    for (var j = 0; j < productsIntheBasket.product.length; j++) {

        numberProducts += productsIntheBasket.product[j].piecesIntheBasket;

        sum += productsIntheBasket.product[j].piecesIntheBasket * shop.catalogProducts[j].price;

        if (productsIntheBasket.product[j].piecesIntheBasket > 0) {

            htmlDoc += `<p>${productsIntheBasket.product[j].name} - ${productsIntheBasket.product[j].piecesIntheBasket} кг</p>`
        }
    }
    htmlDoc += `<p>Итого к оплате: ${sum}p</p>`;
    totalPrice.innerHTML = `<p>Товаров в корзине: ${numberProducts}</p>${htmlDoc}`;
}
