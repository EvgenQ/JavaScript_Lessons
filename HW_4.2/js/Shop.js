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

function Add(getId) {
    for (var j = 0; j < productsIntheBasket.product.length; j++) {
        if (productsIntheBasket.product[j].name == getId) {

            productsIntheBasket.product[j].piecesIntheBasket++;
            shop.catalogProducts[j].pieces--;
        }
    }
}
function TotalPrice() {
    var sum = 0
    var numberProducts = 0;
    var htmlDoc = '';
    var total = document.querySelector('.ShowTotalPrice');
    for (var j = 0; j < productsIntheBasket.product.length; j++) {

        numberProducts += productsIntheBasket.product[j].piecesIntheBasket;

        sum += productsIntheBasket.product[j].piecesIntheBasket * shop.catalogProducts[j].price;

        if (productsIntheBasket.product[j].piecesIntheBasket > 0) {

            htmlDoc += `<p>${productsIntheBasket.product[j].name} - ${productsIntheBasket.product[j].piecesIntheBasket} кг</p>`
        }
    }
    htmlDoc += `<p>Итого к оплате: ${sum}p</p>`;
    total.innerHTML = `<p>Товаров в корзине: ${numberProducts}</p>${htmlDoc}`;
}
