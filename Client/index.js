const axios = require('axios');
const port = 3000;
const dataServiceBaseUrl = `http://127.0.0.1:${port}`;

function getMovie() {
	//obican
	axios.get(dataServiceBaseUrl + '/api/movie')
		.then(response => { console.log('Success: ', response.data) })
		.catch(error => { debugger; console.error('Error: ', error) });
}

function getMovieById() {
	//request params
	axios.get(dataServiceBaseUrl + '/api/movie/1')
		.then(response => { console.log('Success: ', response.data) })
		.catch(error => { console.error('Error: ', error) });
}

function getMovieByRatingOrName() {
	//with query params
	const rating = 8;
	const name = 'Pulp Fiction';
	axios.get(dataServiceBaseUrl + `/api/movie?rating=${rating}&name=${name}`)
		.then(response => { console.log('Success: ', response.data) })
		.catch(error => { console.error('Error: ', error) });
}

function wontGetAnythingJustForShow() {
	//s ekstra headerima
	const config = {
		headers: {
			'Authorization': 'Bearer YourAuthToken',
			'Accept': 'application/json',
		},
	};
	axios.get(dataServiceBaseUrl + '/api', config)
		.then(response => { console.log('Success:', response.data) })
		.catch(error => { console.error('Error:', error) });
}

//POST REQUEST
function addMovie() {
	const postData = {
        id: 11,
        title: 'Forrest Gump',
	  };
	const headers = {
		'Content-Type': 'application/json',
	  };

	axios.post(dataServiceBaseUrl + '/api/movie', postData, {headers: headers} )
		.then(response => { console.log('Response:', response.data)})
		.catch(error => { debugger; console.error('Error:', error)});
}

//PUT REQUEST
function changeMovieInfo() {
	const updatedMovieData = {
        id: 10,
        title: 'Inception',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
        year: 2010,
        rating: 9.9
    };
	  
	axios.put(dataServiceBaseUrl + '/api/movie/1', updatedMovieData)
		.then(response => { debugger; console.log('Response:', response.data)})
		.catch(error => { console.error('Error:', error)});
}

//PATCH REQUEST
function changePartOfMovieInfo() {
	const partialMovieData = {
		rating: 9.6
	};

	axios.patch(dataServiceBaseUrl + '/api/movie/1', partialMovieData)
		.then(response => { console.log('Response:', response.data)})
		.catch(error => { console.error('Error:', error)});
}

//DELETE REQUEST
function deleteMovie() {
	axios.delete(dataServiceBaseUrl + '/api/movie/1')
		.then(response => { console.log('Success: ', response.data) })
		.catch(error => { console.error('Error: ', error) });
}

// ASINKRONA FUNKCIJA

async function mojaLista() {
	try {
	  // Simulirajte neku asinkronu operaciju, kao što je dohvaćanje podataka s udaljenog servera
	  const data = await nekaAsinkronaOperacija();
	  
	  // Ovdje možete raditi nešto s dohvaćenim podacima, npr. obrada ili ispis
	  console.log('Podaci su uspješno dohvaćeni:', data);
	  
	  return data; // Vratite podatke iz funkcije ako je potrebno
	} catch (error) {
	  console.error('Došlo je do greške:', error);
	  throw error; // Bacite grešku (ako je potrebno) kako bi se daljnja obrada vršila na višoj razini
	}
  }
  

//MAIN
//-------------------------------------- GET
//getMovie();
//getMovieById();
//getMovieByRatingOrName();
//wontGetAnythingJustForShow();

//-------------------------------------- POST
//addMovie();

//-------------------------------------- PUT
//changeMovieInfo();

//-------------------------------------- PATCH
//changePartOfMovieInfo();

//-------------------------------------- DELETE
//deleteMovie();

/*
// ================================================================================================ //
// ========================================== ZADACI-03 ============================================ //
// ================================================================================================ //

	1. Dodati nova dva filma
	2. Dohvatiti sve filmove
	3. Onom filmu s najmanjom ocjenom treba dati ocjenu 9.9

*/

/*

// 1. //
	function student_Dodaj_2_Filma() {
		const postData = [{
			id: 15,
			title: 'Die with fire',
		},
		{
			id: 155,
			title: 'Die with water this time'
		}];

		const headers = {
			'Content-Type': 'application/json',
		};

		axios.post(dataServiceBaseUrl + '/api/movie', postData, {headers: headers} )
			.then(response => { console.log('Response:', response.data)})
			.catch(error => { debugger; console.error('Error:', error)});
	}

	student_Dodaj_2_Filma();

*/

// 2. //
function student_Uzmi_Sve_Filmove() {
	//obican
	axios.get(dataServiceBaseUrl + '/api/movie')
		.then(response => { console.log('Success: ', response.data) })
		.catch(error => { debugger; console.error('Error: ', error) });
}

student_Uzmi_Sve_Filmove();

// 3. //
changeMovieInfo()


// ================================================================================================ //
// ========================================== ZADACI-04 ============================================ //
// ================================================================================================ //

/*
Uvod:
Pokrenite klijent i servis

1. Zadatak (1)
Informaticari:
	- Potrebno je dodati funkcionalnost koja dodaje listu filmova u model.
	- Jedan film mora odgovarati prethodno definiranom modelu.
	- Input je lista objekata.

2. Zadatak (1)
Informaticari:
	- Potrebno je dodati funkcionalnost koja racuna medijan ocjena unesenih filmova
	- Nema input parametra

Kao dokaz da funkcionalnost radi, potrebno je pozvati funkcionalnost i ispisati rezultat.
*/

// 1. //
/*
async function addAllMovies() {
	const postData = {
		newMovie
	  };
	const headers = {
		'Content-Type': 'application/json',
	  };

	axios.post(dataServiceBaseUrl + '/api/movie', postData, {headers: headers} )
		.then(response => { console.log('Response:', response.data)})
		.catch(error => { debugger; console.error('Error:', error)});
}
*/

/*
async function addAllMovies() {
	try {
	  const postData = {
		newMovie
	  };
	  
	  const headers = {
		'Content-Type': 'application/json',
	  };
  
	  const response = await axios.post(dataServiceBaseUrl + '/api/movie', postData, {headers: headers});
	  console.log('Response:', response.data);
	} catch (error) {
	  debugger;
	  console.error('Error:', error);
	}
  }
  addAllMovies()
*/
