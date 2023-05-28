let money = 0

let totalElement = document.getElementById('total')

function add() {
    money = money + 1
    totalElement.innerHTML = 'יש לך ' + money + ' שקלים '
}

function take() {
    money = money - 1
    totalElement.innerHTML = 'יש לך ' + money + ' שקלים '
}
