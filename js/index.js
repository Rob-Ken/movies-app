(async () => {

/***************** DOM selectors *****************/

let titleInput = document.querySelector('#title');
let yearInput = document.querySelector('#year');
let directorInput = document.querySelector('#director');
let ratingInput = document.querySelector('#rating');
let runtimeInput = document.querySelector('#runtime');
let genreInput = document.querySelector('#genre');
let actorsInput = document.querySelector('#actors');
let addMovies = document.querySelector('#addMovies-btn');
let clearMovies = document.querySelector('#clearMovies-btn');
let sortBy = document.querySelector('#sortInput');
let sortButton = document.querySelector('#sortBtn');

/***************** Event Listens *****************/

addMovies.addEventListener("click", createMovie);

clearMovies.addEventListener('click', function(e){
    e.preventDefault()
    document.querySelector('#newMovieForm').reset()
})

/***************** Display Movies *****************/

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

/***************** Dynamic Display Movies *****************/

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
    </div>
        <p>
           <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample${i}" role="button" aria-expanded="false" aria-controls="multiCollapseExample">Update Movie</a>
           <button class="btn btn-primary" id="deleteMovie-btn" data-MovieId="${movies[i].id}">Delete Movie</button>
        </p>
        <div class="collapse multi-collapse" id="multiCollapseExample${i}">
            <div class="card card-body" >
                <form id="updateForm" data-MovieId="${movies[i].id}">
                    <label for="titleUpdate">title:</label><br>
                    <input type="text" data-update-field="titleUpdate" value="${movies[i].title}"><br>
                    <label for="yearUpdate">year:</label><br>
                    <input type="text" data-update-field="yearUpdate" value="${movies[i].year}"><br>
                    <label for="directorUpdate">director:</label><br>
                    <input type="text" data-update-field="directorUpdate" value="${movies[i].director}"><br>
                    <label for="ratingUpdate">rating:</label><br>
                    <input type="text" data-update-field="ratingUpdate" value="${movies[i].rating}"><br>
                    <label for="runtimeUpdate">runtime:</label><br>
                    <input type="text" data-update-field="runtimeUpdate" value="${movies[i].runtime}"><br>
                    <label for="genreUpdate">genre:</label><br>
                    <input type="text" data-update-field="genreUpdate" value="${movies[i].genre}"><br>
                    <label for="actorsUpdate">actors:</label><br>
                    <input type="text" data-update-field="actorsUpdate" value="${movies[i].actors}"><br>
                    
                    <!------------------ Update Movies Button ------------------>
                    <button data-update-movie data-MovieId="${movies[i].id}">Update Movie</button>
                </form>
            </div>
        </div>
    `;}
    $('#movie-list').html(html);
}

/***************** deletes the current movie selected *****************/

$(`#movie-list`).on('click', '#deleteMovie-btn', async function() {
   const obj = {
       id: $(this).attr('data-MovieId')
   }
   deleteMovie(obj).then( function(){
       displayMovies()
   })
})

/***************** updates the current movie selected  *****************/

$(`#movie-list`).on('click', '[data-update-movie]', async function(e) {
    e.preventDefault()
    const obj = {
        id: $(this).attr('data-MovieId')
    }
    let parentElement = $(this).parents('.movies');
    let titleUpdate = parentElement.find('[data-update-field="titleUpdate"]')
    let yearUpdate = parentElement.find('[data-update-field="yearUpdate"]')
    let directorUpdate = parentElement.find('[data-update-field="directorUpdate"]')
    let ratingUpdate = parentElement.find('[data-update-field="ratingUpdate"]')
    let runtimeUpdate = parentElement.find('[data-update-field="runtimeUpdate"]')
    let genreUpdate = parentElement.find('[data-update-field="genreUpdate"]')
    let actorsUpdate = parentElement.find('[data-update-field="actorsUpdate"]')

    const updateData = {
        id: $(this).attr('data-MovieId'),
        title: titleUpdate.val(),
        year: yearUpdate.val(),
        director: directorUpdate.val(),
        rating: ratingUpdate.val(),
        runtime: runtimeUpdate.val(),
        genre: genreUpdate.val(),
        actors: actorsUpdate.val()
    }

    updateMovie(updateData).then( function(){
        displayMovies()
    })

})

/***************** Sort Function *****************/

async function sortByTitle(){
    let movies = await getMovies();
    movies.sort((a , b) => {
        if (a.title < b.title) {
            return -1;
        } else if (a.title > b.title) {
            return 1;
        } else {
            return 0;
        }
    });
    return movies;
}

let sortedByTitle = await sortByTitle();
console.log(sortedByTitle);

async function sortByYear(){
    let movies = await getMovies();
    movies.sort((a , b) => {
        if (a.year < b.year) {
            return -1;
        } else if (a.year > b.year) {
            return 1;
        } else {
            return 0;
        }
    });
    return movies;
}

let sortedByYear = await sortByYear();
console.log(sortedByYear);

})();