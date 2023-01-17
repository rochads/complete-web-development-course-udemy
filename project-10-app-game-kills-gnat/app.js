let height = 0
let width = 0

function adjustGameWindowSize() {
    height = window.innerHeight
    width = window.innerWidth

    console.log(`window width: ${width}, window height: ${height}`)
}

adjustGameWindowSize()




let positionX = Math.floor(Math.random() * width) - 90
let positionY = Math.floor(Math.random() * height) - 90

positionX = positionX < 0 ? 0 : positionX
positionY = positionY < 0 ? 0 : positionY

console.log (`gnat's position on the x-axis: ${positionX}, gnat's position on the y-axis: ${positionY}`)




let gnat = document.createElement('img')
gnat.src = "./resources/images/gnat.png"
gnat.className = "gnat"
gnat.style.left = `${positionX}px`
gnat.style.top = `${positionY}px`
gnat.style.position = 'absolute'

document.body.appendChild(gnat)


