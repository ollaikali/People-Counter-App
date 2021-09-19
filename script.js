let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")

let count = 0
let totalNum = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countText = count + " - "
    totalNum += count
    saveEl.textContent += countText
    countEl.textContent = 0
    count = 0
    }

function total() {
    if (totalNum > 0) {
        totalEl.textContent = totalNum
    }
    else {
        alert ("Your total is 0")
    }
}
