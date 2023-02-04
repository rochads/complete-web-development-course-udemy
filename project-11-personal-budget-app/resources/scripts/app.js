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

    retrieveAllRecords() {

        let expenses = Array()

        let id = localStorage.getItem('id')

        for (let i = 1; i <= id; i++) {

            let expense = JSON.parse(localStorage.getItem(i))

            if (expense === null) {
                continue
            }

            expenses.push(expense)

        }

        return expenses

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

        document.getElementById('modal-title').innerHTML = 'Registro inserido com sucesso'
        document.getElementById('modal-title-parent').className = 'modal-header text-success'
        document.getElementById('modal-content').innerHTML = 'Despesa foi cadastrada com sucesso!'
        document.getElementById('modal-btn').innerHTML = 'Voltar'
        document.getElementById('modal-btn').className = 'btn btn-success'

        $('#modal-register-expense').modal('show')

        year.value = ''
        month.value = ''
        day.value = ''
        type.value = ''
        description.value = ''
        value.value = ''

    } else {

        // false

        document.getElementById('modal-title').innerHTML = 'Erro na inclusão do registro'
        document.getElementById('modal-title-parent').className = 'modal-header text-danger'
        document.getElementById('modal-content').innerHTML = 'Erro na gravação! Verifique se todos os campos foram preenchidos.'
        document.getElementById('modal-btn').innerHTML = 'Voltar e corrigir'
        document.getElementById('modal-btn').className = 'btn btn-danger'

        $('#modal-register-expense').modal('show')


    }

}

function loadListExpenses() {

    let expenses = Array()

    expenses = bd.retrieveAllRecords()

    let listExpenses = document.getElementById('list-expenses')

    expenses.forEach(function(i) {

        //console.log(i)

        let line = listExpenses.insertRow()

        line.insertCell(0).innerHTML = `${i.day}/${i.month}/${i.year}`

        switch (i.type) {
            case '1': i.type = 'Alimentação'
                break
            case '2': i.type = 'Educação'
                break
            case '3': i.type = 'Lazer'
                break
            case '4': i.type = 'Saúde'
                break
            case '5': i.type = 'Transporte'
                break
        }

        line.insertCell(1).innerHTML = i.type
        line.insertCell(2).innerHTML = i.description
        line.insertCell(3).innerHTML = i.value



    })

}