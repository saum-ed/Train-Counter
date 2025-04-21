let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}

function save(){
    let entries = " " + count + " - ";
    saveEL.innerText += entries
    count = 0
    countEl.innerText = count
}
