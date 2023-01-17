let height = 0
let width = 0

function adjustGameWindowSize() {
    height = window.innerHeight
    width = window.innerWidth

    console.log(`window width: ${width}, window height: ${height}`)
}

adjustGameWindowSize()

function defineRandomPosition() {
    
    if (document.getElementById('gnat')) {
        document.getElementById('gnat').remove()
    }

    let positionX = Math.floor(Math.random() * width) - 90
    let positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log (`gnat's position on the x-axis: ${positionX}, gnat's position on the y-axis: ${positionY}`)

    let gnat = document.createElement('img')
    gnat.src = "./resources/images/gnat.png"
    gnat.className = defineRandomSize() + ' ' + defineRandomSide()
    gnat.style.left = `${positionX}px`
    gnat.style.top = `${positionY}px`
    gnat.style.position = 'absolute'
    gnat.id = 'gnat'

    document.body.appendChild(gnat)

}

function defineRandomSize() {
    let random = Math.floor(Math.random() * 3)
    
    switch(random) {
        case 0:
            return 'gnat1'
        case 1:
            return 'gnat2'
        case 2:
            return 'gnat3'
    }
}

function defineRandomSide() {
    let random = Math.floor(Math.random() * 2)
    
    switch(random) {
        case 0:
            return
        case 1:
            return 'side2'
    }
}