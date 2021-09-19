let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countText = count + " - "
    saveEl.textContent += countText
    countEl.textContent = 0
    count = 0
    }

function total() {
    
}
