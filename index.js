const cvs = document.getElementById("canvas")
const ctx = cvs.getContext("2d")

const txt = document.getElementById("text")

const scale = 0.75
const width = 1200 * scale
const height = 716 * scale
const resolution = 1
cvs.setAttribute("width", width * resolution)
cvs.setAttribute("height", height * resolution)
ctx.scale(resolution, resolution)

// ctx.fillStyle = "green"
// ctx.fillRect(10, 10, 100, 100)

const img = new Image()
img.src = "./incoherent-man.jpg"
img.onload = function() {
	ctx.drawImage(img, 0, 0, width, height)
}

function clear() {
	ctx.clearRect(0, 0, width, height)
	ctx.drawImage(img, 0, 0, width, height)
}
function update(str) {
	console.log(str)
	clear()
	ctx.font = "30px Meiryo"
	ctx.fillText(str, 370, 100)
}

// function mouseEvent(event) {
// 	console.log(event)
// 	ctx.fillRect(event.layerX, event.layerY, 10, 10)
// }
// cvs.addEventListener("mousedown", function(event) {
// 	cvs.addEventListener("mousemove", mouseEvent)
// })
// cvs.addEventListener("mouseup", function(event) {
// 	cvs.removeEventListener("mousemove", mouseEvent)
// })

txt.addEventListener("keyup", function(event) {
	update(txt.value)
})
