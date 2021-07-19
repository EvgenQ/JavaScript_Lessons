
for(var i = 1; i <= 9; i++){
    var sizeDeckX = createRow(i);
    for(var j = 1; j <= 9; j++){
        createColumn(i,j,sizeDeckX);
    }
}

// Создание строки блока
function createRow(i){
    var sizeDeckX = document.createElement('div');
    sizeDeckX.className = `row${i}`;
    sizeDeckX.style.display = 'flex';
    sizeDeckX.style.flexWrap = 'wrap';
    sizeDeckX.style.height = 'fit-content';
    sizeDeckX.style.alignContent = 'flex-start';
    sizeDeckX.style.fontSize = '30px';
    document.body.appendChild(sizeDeckX);
    return sizeDeckX;
}
//Создание колонки блока
function createColumn(i,j,sizeDeckX){

    if((i >= 1 && j === 1) || (i === 9 && j >= 1)){

        if(i >= 1 && i < 9){
            createBlockWithNumber(i,j,sizeDeckX);
        }

        if(i === 9 && j > 1){
            createBlockAlphabet(j);
        } 
        if(i === 9 && j === 1){
            createBlueBlock(j,sizeDeckX);
        }
    }
    else if((i + j)%2 === 0){
        createWhiteBlock(j,sizeDeckX);
    }
    else{
        createBlackBlock(j,sizeDeckX);
    }
}
// Создаем синий блок(цвет можно менять)
function createBlueBlock(j,sizeDeckX){
    var sizeDeckY = createDiv(j);
    sizeDeckY.style.backgroundColor = '#0000FF';
    sizeDeckX.appendChild(sizeDeckY);
}
// Создаем блок с цифрами
function createBlockWithNumber(i,j,sizeDeckX){
    var sizeDeckY = createDiv(j);
    sizeDeckY.style.backgroundColor = '#4D4234';
    sizeDeckY.style.fontSize = '50px';
    sizeDeckX.appendChild(sizeDeckY);
    sizeDeckY.innerText = `${9-i}`;
}
//Создаем блок с алфавитом
function createBlockAlphabet(j){
    var alphabetLetters = ['A','B','C','D','E','F','G','H']
    var sizeDeckY = createDiv(j);
    sizeDeckY.style.backgroundColor = '#4D4234';
    sizeDeckY.style.fontSize = '50px';
    sizeDeckX.appendChild(sizeDeckY);
    sizeDeckY.innerText = `${alphabetLetters[j-2]}`
}
//Создаем белый блок
function createWhiteBlock(j,sizeDeckX){
    if((i === 1 || i === 2) || (i === 7 || i === 8)){
        var sizeDeckY = createDiv();
        sizeDeckY.style.backgroundColor = '#DEB887';
        sizeDeckX.appendChild(sizeDeckY);
        var img = addFigure(i,j);
        sizeDeckY.appendChild(img);
    }
    else{
        var sizeDeckY = createDiv();
        sizeDeckY.style.backgroundColor = '#DEB887';
        sizeDeckX.appendChild(sizeDeckY);
    }
}
//Создаем черный блок
function createBlackBlock(j,sizeDeckX){
    if((i === 1 || i === 2) || (i === 7 || i === 8)){
        var sizeDeckY = createDiv(j);
        sizeDeckY.style.backgroundColor = '#312D21';
        sizeDeckX.appendChild(sizeDeckY);
        var img = addFigure(i,j);
        sizeDeckY.appendChild(img);
    }
    else{
        var sizeDeckY = createDiv();
        sizeDeckY.style.backgroundColor = '#312D21';
        sizeDeckX.appendChild(sizeDeckY);
    }
}
// Добавление фигур
function addFigure(i,j){
    var imgPawn = document.createElement('img');
    imgPawn.className = `Pawn${j}`;
    if(j > 1 && i === 2){
        imgPawn.src = "../Chess board/img/WPawn.png";
    }
    if(j > 1 && i === 7){
        imgPawn.src = "../Chess board/img/BPawn.png";
    }
    if(j === 6 && i === 1){
        imgPawn.src = "../Chess board/img/Wking.png";
    }
    if(j === 6 && i === 8){
        imgPawn.src = "../Chess board/img/Bking.png";
    }
    if(j === 5 && i === 1){
        imgPawn.src = "../Chess board/img/Wqueen.png";
    }
    if(j === 5 && i === 8){
        imgPawn.src = "../Chess board/img/Bqueen.png";
    }
    if((j === 4 || j === 7) && i === 1){
        imgPawn.src = "../Chess board/img/Wbishop.png";
    }
    if((j === 4 || j === 7) && i === 8){
        imgPawn.src = "../Chess board/img/Bbishop.png";
    }
    if((j === 3 || j === 8) && i === 1){
        imgPawn.src = "../Chess board/img/Wknight.png";
    }
    if((j === 3 || j === 8) && i === 8){
        imgPawn.src = "../Chess board/img/Bknight.png";
    }
    if((j === 2 || j === 9) && i === 1){
        imgPawn.src = "../Chess board/img/Wcastle.png";
    }
    if((j === 2 || j === 9) && i === 8){
        imgPawn.src = "../Chess board/img/Bcastle.png";
    }
    imgPawn.alt = 'pictures';
    imgPawn.style.height = '50px';
    imgPawn.style.width = '50px';
    return imgPawn;
}
function createDiv(j){
    var sizeDeckY = document.createElement('div');
    sizeDeckY.className = `col${j}`;
    sizeDeckY.style.height = '50px';
    sizeDeckY.style.width = '50px';
    sizeDeckY.style.marginBottom = '15px';
    sizeDeckY.style.marginRight = '15px';
    sizeDeckY.style.border = '1px solid #000';
    sizeDeckY.style.borderRadius = '5px';
    sizeDeckY.style.textAlign = 'center';
    sizeDeckY.style.boxShadow = '5px 5px 10px rgb(19, 1, 1)';
    return sizeDeckY;
}
