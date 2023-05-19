// let pixelBoard = document.querySelector("#pixel-board");
let currentColor = "cor1";
let bodyButton = document.querySelector("body");
let pixelBoard = document.createElement("div");
pixelBoard.id = "pixel-board";

let botaoClear = document.createElement("button");
botaoClear.id = "clear-board";
botaoClear.innerText = "Limpar";
botaoClear.addEventListener("click", resetarPixels);
bodyButton.appendChild(botaoClear);

criarPixels(5);
bodyButton.appendChild(pixelBoard);





function criarPixels(tamanho){
    for(let i = 0; i < tamanho * tamanho; i += 1){
        let div = document.createElement("div");
        div.classList.add("pixel");
        pixelBoard.appendChild(div);
    }
}

//capturar elemento que adciona a classe selected dentro dos elementos que tem a classe color
let colorSelected = document.getElementsByClassName("color");
//colocar o selected dentro da primeira posicao
colorSelected[0].classList.add ("selected");

//criar um for e adicionar uma escuta para cada seletor de cor(botoes).
for(let i = 0; i < colorSelected.length; i += 1){
    colorSelected[i].addEventListener("click", (evt)=>{
        // funcao que percorre o array dos botoes e remove todas as classes selecteds
        removeSelected(colorSelected);
        // funcao que adiciona a classe selected no target do click 
        evt.target.classList.add("selected");
        currentColor = evt.target.id;
        // console.log(evt.target.id);

    
    });
}
function removeSelected(arr){
    for(let i = 0; i < arr.length; i += 1){
      arr[i].classList.remove("selected");  
    }
}

pixelBoard.addEventListener("click", (evt)=>{

    evt.target.id = currentColor;
    
})



//capturar todos os pixels em um array
//usar um for para acessar cada item desse array
//em cada item trocar o id atual para id = ""



function resetarPixels(){
let pixelsArray = document.getElementsByClassName("pixel");

for(let i = 0; i < pixelsArray.length; i += 1){
    pixelsArray[i].id = "";

}
}




