class Expense {
    
    constructor(year, month, day, type, description, value) {
        this.year = year
        this.month = month
        this.day = day
        this.type = type
        this.description = description
        this.value = value
    }

    validateData() {

        for (let i in this) {

            if (this[i] === undefined || this[i] === '' || this[i] === null) {
                return false
            }

        }

        return true

    }

}

class Bd {

    constructor() {
        let id = localStorage.getItem('id')

        if(id === null) {
            localStorage.setItem('id', 0)
        }
    }

    getNextId() {
        let next_id = localStorage.getItem('id')

        return parseInt(next_id) + 1
    }

    write(e) {

        let id = this.getNextId()

        localStorage.setItem(id, JSON.stringify(e))

        localStorage.setItem('id', id)
    
    }

}

let bd = new Bd()

function registerExpense() {

    let year = document.getElementById('year')
    let month = document.getElementById('month')
    let day = document.getElementById('day')
    let type = document.getElementById('type')
    let description = document.getElementById('description')
    let value = document.getElementById('value')

    let expense = new Expense(
        year.value,
        month.value,
        day.value,
        type.value,
        description.value,
        value.value
    )

    if (expense.validateData()) {

        // true

        bd.write(expense)

    } else {

        // false

        console.log('invalid')

    }

    
    
}