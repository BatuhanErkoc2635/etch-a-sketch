const container = document.querySelector(".container")
let gridNumber = prompt("Please enter the grid number: (do not enter more than 100)")
const resizeButton = document.querySelector(".resizeButton")



function createGrid(index){
    if(gridNumber <= 100 && gridNumber > 0){
        for (let i = 1; i <= index; i++) {
            const column = document.createElement("div")
            column.classList.add("column")
            container.appendChild(column)
            for (let i = 1; i <= index; i++) {
                const row = document.createElement("div")
                row.classList.add("row")
                column.appendChild(row)
                
                
                
                
            }
        }
    }
    else if (gridNumber <= 0 ){
        alert("Grid number cant be less than 1")
        location.reload()
    }
    else{
        alert("Please dont enter a number bigger than 100")
        location.reload()
    }
}


function detectSquare(){
    const clearButton = document.querySelector(".clearButton")
    squares = document.querySelectorAll(".row")
    console.log(squares)
    squares.forEach(element => {
        element.addEventListener ("mouseover" , () => {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            element.style.backgroundColor = "#" + randomColor
            
        })
        clearButton.addEventListener("click",() =>{
            element.style.backgroundColor = "white"
        })
        
    });
}

resizeButton.addEventListener("click",() => {
    location.reload()
})



createGrid(gridNumber)
detectSquare()


