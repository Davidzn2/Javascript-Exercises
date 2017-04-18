const nombre = "David"
const dias = [
	"lunes",
	"martes",
	"miercoles",
	"jueves",
	"viernes",
	"sabado",
	"domingo"
]

function correr(){
	const min = 5
	const max = 15
	return Math.round(Math.random() * (max - min)) + min
}
let totalKms = 0
for (let i = 0; i < dias.length; i++) {
	const kms = correr()
	totalKms = totalKms + kms
	console.log(`El dia ${dias[i]} ${nombre} corrió ${kms} kms`)
}
const promedioKms = totalKms/dias.length
console.log(`En la semana ${nombre} corrió ${totalKms} kms,
que es un promedio de ${promedioKms.toFixed(2)} kms por dia.`)