/*-- CONECION A API DE RECETAS --*/
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c5d1eecb5msh81f7b819ee18cfap12128ejsn7b56bf496b31',
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
	}
};

fetch('https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));