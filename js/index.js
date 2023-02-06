(async () => {

let titleInput = document.querySelector('#title')
let yearInput = document.querySelector('#year')
let directorInput = document.querySelector('#director')
let ratingInput = document.querySelector('#rating')
let runtimeInput = document.querySelector('#runtime')
let genreInput = document.querySelector('#genre')
let actorsInput = document.querySelector('#actors')
let addMovies = document.querySelector('#addMovies-btn')

addMovies.addEventListener("click", createMovie);

function createMovie(e) {
    e.preventDefault();
    let movie = {
        title: titleInput.value,
        year: yearInput.value,
        director: directorInput.value,
        rating: ratingInput.value,
        runtime: runtimeInput.value,
        genre: genreInput.value,
        actors: actorsInput.value
    }
    addMovie(movie).then(function() {
        displayMovies()
    })
}
    await displayMovies();

    $('#deleteMovie-btn').click(async function  () {
        let test = await getMovies();

    });

    async function displayMovies() {
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
            <button id="deleteMovie-btn" data-MovieId="${movies[i].id}">Delete Movie</button>
        </div>
        
        <div>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" data-MovieID="${movies[i].id}">Update Movie ${movies[i].title}</button>

            <div class="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">${movies[i].title}</h5>
                <button class="btn-close" aria-label="Close" data-MovieID="${movies[i].id}"></button>
              </div>
              
              <div class="offcanvas-body">
                <form id="updateForm">
                    <label for="titleUpdate">title:</label><br>
                    <input type="text" id="titleUpdate" name="fname" value=${movies[i].title}><br>
                    <label for="yearUpdate">year:</label><br>
                    <input type="text" id="yearUpdate" name="lname" value=${movies[i].year}><br>
                    <label for="directorUpdate">director:</label><br>
                    <input type="text" id="directorUpdate" name="fname" value=${movies[i].director}><br>
                    <label for="ratingUpdate">rating:</label><br>
                    <input type="text" id="ratingUpdate" name="fname" value=${movies[i].rating}><br>
                    <label for="runtimeUpdate">runtime:</label><br>
                    <input type="text" id="runtimeUpdate" name="fname" value=${movies[i].runtime}><br>
                    <label for="genreUpdate">genre:</label><br>
                    <input type="text" id="genreUpdate" name="fname" value=${movies[i].genre}><br>
                    <label for="actorsUpdate">actors:</label><br>
                    <input type="text" id="actorsUpdate" name="fname" value=${movies[i].actors}><br>
                    <button id="updateMovie-btn2" data-MovieId="${movies[i].id}">Update Movie</button>
                </form>
              </div>   
            </div> 
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

    $(`#movie-list`).on('click', '#updateMovie-btn2', async function(e) {
        e.preventDefault()
        const obj = {
            id: $(this).attr('data-MovieId')
        }
        let titleUpdate = document.querySelector('#titleUpdate')
        let yearUpdate = document.querySelector('#yearUpdate')
        let directorUpdate = document.querySelector('#directorUpdate')
        let ratingUpdate = document.querySelector('#ratingUpdate')
        let runtimeUpdate = document.querySelector('#runtimeUpdate')
        let genreUpdate = document.querySelector('#genreUpdate')
        let actorsUpdate = document.querySelector('#actorsUpdate')

        const updateData = {
            id: $(this).attr('data-MovieId'),
            title: titleUpdate.value,
            year: yearUpdate.value,
            director: directorUpdate.value,
            rating: ratingUpdate.value,
            runtime: runtimeUpdate.value,
            genre: genreUpdate.value,
            actors: actorsUpdate.value
        }

        updateMovie(updateData).then( function(){
            displayMovies()
        })
    })

})();