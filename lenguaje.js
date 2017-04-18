function lenguaje(str){
	let translation = str

	/*
	Si la palabara es un palindromo,
	ninguna regla cuenta y se devuelve 
	la palabra intercalando mayúsculas y
	minúsculas
	*/

	const reverse = (str) => str.split('').reverse().join('')
	function minMay(str){
		const length = str.length
		let translation = ''
		let capitalize = true
		for (let i = 0; i < length; i++){
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}
	if (str == reverse(str)) {
		return minMay(str)
	}

	/*
	Si la palabra termina en "ar" 
	se quitan los mismos
	*/
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2)
	}

	/*
	Si la palabra empieza con Z se pone 
	pe al final
	*/
	if (str.toLowerCase().startsWith("z")){
		translation = translation + 'pe'
	}

	/*
	Si la palabar tiene 10 o mas letras,
	se parte a la mitad y se une con un 
	guion medio
	*/
	if (translation.length>=10) {
		const firstHalf = translation.slice(0, Math.round(translation.length/2))
		const secondHalf = translation.slice( Math.round(translation.length/2))
		translation = `${firstHalf}-${secondHalf}`
	}
	


	return translation

}

console.log(lenguaje("Programar"))
console.log((lenguaje("Zorrilloar")))
console.log(lenguaje("sometemos"))

