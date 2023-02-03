
let titleInput = document.querySelector('#title')
let yearInput = document.querySelector('#year')
let directorInput = document.querySelector('#director')
let ratingInput = document.querySelector('#rating')
let runtimeInput = document.querySelector('#runtime')
let genreInput = document.querySelector('#genre')
let actorsInput = document.querySelector('#actors')
let addMovies = document.querySelector('#addMovies-btn')
// let movieCard = document.querySelector('#movie-list')
// let updateMovieBtn = document.querySelector('#updateMovie')
// let deleteMovieBtn = document.querySelector('#deleteMovie')

addMovies.addEventListener("click", addMovie);

(async () => {
    // This is the entry point for your application. Write all of your code here.
    // Before you can use the database, you need to configure the "db" object 
    // with your team name in the "js/movies-api.js" file.
    await displayMovies();

    // let movies = await getMovies();
    // displayMovies(movies)

    $('#deleteMovie-btn').click(async function  () {
        let test = await getMovies();

        // console.log(getMovies)
        // for (let i=0; i<getMovies.length; i++){
        //     if (getMovies[i].title === titleInput.val()){
        //         console.log(getMovies[i].id)
        //         let movie ={}
        //         movie.id = getMovies[i].id
        //
        //         deleteMovie(movie);
        //     }
        // }
    });

    async function displayMovies() {
        console.log('fired')
        let movies = await getMovies();
        let html = ''
        for (let i = 0; i < movies.length; i += 1) {
            html += `
        <div class="column movies">
            <p>title: ${movies[i].title}</p>
            <p>year: ${movies[i].year}</p>
            <p>director: ${movies[i].director}</p>
            <p>rating: ${movies[i].rating}</p>
            <p>runtime: ${movies[i].runtime}</p>
            <p>genre: ${movies[i].genre}</p>
            <p>actors: ${movies[i].actors}</p>
            <button id="updateMovie-btn" data-MovieId="${movies[i].id}">Update Movie</button>
            <button id="deleteMovie-btn" data-MovieId="${movies[i].id}">Delete Movie</button>
        </div>
        `;
        }
        $('#movie-list').html(html);
    }
    $(`#movie-list`).on('click', '#deleteMovie-btn', async function() {
       const obj = {
           id: $(this).attr('data-MovieId')
       }

       deleteMovie(obj).then( function(){
           displayMovies()
       })

    })



})();