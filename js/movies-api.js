// In this project, we will be using a Firebase database to store our movie data.
// Configuring Firebase is more involved than what is covered in this lesson,
// so we have provided a class that will handle the configuration for you.


let db = new FirebaseDatabase({
    team: "teamE"
});

/************* movie database *********************/

const getMovies =  async () => {
    const url = '/movies';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    let response = await db.fetch(url, options);
    return await response.json();
}

/************* delete a movie from the database *********************/

const deleteMovie = async (movie) => {
    try {
        const url = `/movies/${movie.id}`;
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let response = await db.fetch(url, options);
        return await response.json();

    } catch (e) {
        console.error(e);
    }
}

/************* updates a movie from the database *********************/

const updateMovie = async (movie) => {
    try {
        const url = `/movies/${movie.id}`;
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie),
        };
        let response = await db.fetch(url, options);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
}


/************* add movie to the database *********************/

const addMovie = async (movie) => {
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
