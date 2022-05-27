const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')
// drawing a square
c.fillStyle = 'blue'
c.fillRect(100, 100, 100, 100)
c.fillStyle = 'red'
c.fillRect(200, 300, 100, 100)
c.fillStyle = 'green'
c.fillRect(300, 500, 100, 100)


// drawing a line
c.beginPath()
c.moveTo(200, 400);
c.lineTo(100, 400)
c.lineTo(600, 100)
c.strokeStyle = '#f12feef1'
c.stroke()

//drawing a Arc/ Circle

// c.beginPath()
// c.arc(300, 500, 30, 0, Math.PI*2, false)
// c.strokeStyle = '#000'
// c.stroke()

for (let i = 0; i < 1000; i++){
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    let color = `rgba(${r},${g},${b},${Math.random()})`
    c.beginPath()
    c.arc(x, y, 30, 0, Math.PI*2, false)
    c.strokeStyle = color
    c.stroke()
}