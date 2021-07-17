function devide() {
    var obj = {}
    var number = document.getElementsByName('IdInput')[0].value;
    var el = document.getElementById('outputext');
    if (number.length > 3) {
        alert('Вы ввели число больше 999')
    }
    else {

        for (let i = 0; i < number.length; i++) {
            if (number.length == 3) {
                switch (i) {
                    case 0:
                        obj.сотни = parseInt(number[i])
                        break;
                    case 1:
                        obj.десятки = parseInt(number[i])
                        break;
                    case 2:
                        obj.единицы = parseInt(number[i])
                        break;
                    default:
                        break;
                }
            }
            if (number.length == 2) {
                switch (i) {
                    case 0:
                        obj.десятки = parseInt(number[i])
                        break;
                    case 1:
                        obj.единицы = parseInt(number[i])
                        break;
                    default:
                        break;
                }
            }
            if (number.length == 1) {
                obj.единицы = parseInt(number[i])
                return
            }

        }

    }
    if (number.length == 3) {
        el.innerHTML = ` В числе ${number}<br>Сотен: ${obj.сотни} <br>Десяток: ${obj.десятки} <br>Eдениц: ${obj.единицы}`
    }
    if (number.length == 2) {
        el.innerHTML = `Десяток: ${obj.десятки} Eдениц: ${obj.единицы}`
    }
    if (number.length == 1) {
        el.innerHTML = `Eдиниц: ${obj.единицы}`
    }
    if (number.length == 0) {
        el.innerHTML = `Вы ничего не ввели`
    }

}