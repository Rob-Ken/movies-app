// In this project, we will be using a Firebase database to store our movie data.
// Configuring Firebase is more involved than what is covered in this lesson,
// so we have provided a class that will handle the configuration for you.


let db = new FirebaseDatabase({
    team: "teamE" // Replace this with your team name
});

// You will use the "db" object to make requests to the database very similarly to how you
// would use the "fetch" function to make requests to an API. The only difference is that
// you will be adding "db" in front of the "fetch" function.
// Example: db.fetch(url, options);

// Here is a function that uses the "db.fetch()" method to make a
// GET request to the "/movies" endpoint:
// const getMovies = async () => {
//     const url = '/movies';
//     const options = {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     };
//     let response = await db.fetch(url, options);
//     return await response.json();
// }

const getMovies =  () => {
    const url = '/movies';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };
     db.fetch(url, options)
         .then(response => response.json(response))
         .then((data) => displayMovies(data))

}
getMovies()

function displayMovies(data) {
    console.log(data)
    let html = ''
    for (let i = 0; i < data.length; i += 1) {

        html += `
            <p>title: ${data[i].title}</p>
            <p>year: ${data[i].year}</p>
            <p>director: ${data[i].director}</p>
            <p>rating: ${data[i].rating}</p>
            <p>runtime: ${data[i].runtime}</p>
            <p>genre: ${data[i].genre}</p>
            <p>actors: ${data[i].actors}</p>
        `;
    }
    $('#movie-list').append(html);
}

// And here is a function that will add a new movie:
const addMovie = async (movie) => {
    // "movie" is an object that contains the movie data
    // Example: {title: "The Matrix", year: 1999, rating: 5}
    // You do NOT need to add an id to the movie object.
    // After the movie is added to the database, the database will
    // automatically add an id to the movie object and return it.
    const url = '/movies';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
    };
    let response = await db.fetch(url, options);
    return await response.json();
}

function addNewMovies()
{
    title: title.value,
    year: year.value,
    director: director.value,
    rating: rating.value,
    runtime: runtime.value,
    genre: genre.value,
    actors: actors.value,
}
// Call the function
addNewMovies()


let titleInput = document.querySelector('#title')
let yearInput = document.querySelector('#year')
let directorInput = document.querySelector('#director')
let ratingInput = document.querySelector('#rating')
let runtimeInput = document.querySelector('#runtime')
let genreInput = document.querySelector('#genre')
let actorsInput = document.querySelector('#actors')
let addMovies = document.querySelector('#addMovies-btn')
addMovies.addEventListener("click", addNewMovies);



// Here is where you will create your own functions to further interact with the database.
// HAPPY CODING!!!




/************* example of a function that gets all movies from the database *********************/
// const getMovies = async () => {
//     try {
//         const url = '/movies';
//         const options = {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         };
//         let response = await db.fetch(url, options);
//         return await response.json();
//     } catch (e) {
//         console.error(e);
//     }
// }



/************* example of a function that gets a specific movie in the database *********************/

// const getMovie = async (movie) => {
//     try {
//         const url = `/movies/${movie.id}`;
//         const options = {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         };
//         let response = await db.fetch(url, options);
//         return await response.json();
//     } catch (e) {
//         console.error(e);
//     }
// }



/************* example of a function that adds a movie in the database *********************/

// const addMovie = async (movie) => {
//     try {
//         const url = '/movies';
//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(movie),
//         };
//         let response = await db.fetch(url, options);
//         return await response.json();
//     } catch (e) {
//         console.error(e);
//     }
// }


/************* example addMovie *********************/

// // This is an example object that you would pass to the function
// // NOTE: This is a NoSQL database, so the object can have any properties you want
// let movieObject = {
//     id: '34kjkj34g5k5jgkg13133',
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     rating: 9.3,
//     runtime: 142,
//     genre: 'Drama',
//     actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
// }
// // Call the function
// addMovie(movieObject);


/************* updates a movie in the database *********************/
// const deleteMovie = async (movie) => {
//     try {
//         const url = `/movies/${movie.id}`;
//         const options = {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         };
//         let response = await db.fetch(url, options);
//         return await response.json();
//     } catch (e) {
//         console.error(e);
//     }
// }