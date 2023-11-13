import { allMovies } from "../models/movieModel.js";

function getMovie(id) {
    if(!id) {
        return allMovies;
    }
    return allMovies.find(x => x.id == id);
}

function getAllMovies(rating, name) {
    if(!rating && !name) {
        return allMovies;
    }
    return allMovies.find(x => x.rating == id || x.title == name);
}

function addAllMovies(newMovie) {
    allMovies.push(newMovie);
    return;
}

function updateMovie(id, newMovieData) {
    let oldMovieIdx = allMovies.findIndex(x => x.id == id);
    allMovies.splice(oldMovieIdx, 1, newMovieData);
    return newMovieData;
}

function updatePartOfMovie(id, newMovieData) {
    let oldMovie = allMovies.find(x => x.id == id);
    let movieDetailsToChange = Object.keys(newMovieData);
    for(let movieDetail of movieDetailsToChange) {
        if(oldMovie[movieDetail]) {
            oldMovie[movieDetail] = newMovieData[movieDetail];
        }
    }
    let oldMovieIdx = allMovies.findIndex(x => x.id == id);
    allMovies.splice(oldMovieIdx, 1, oldMovie);
    return oldMovie;
}

function deleteMovie(id) {
    let oldMovieIdx = allMovies.findIndex(x => x.id == id);
    allMovies.splice(oldMovieIdx, 1);
    return;
}

function medianMovie (rating){
    const median = arr => {
        const mid = Math.floor(arr.length / 2),
          nums = [...arr].sort((a, b) => a - b);
        return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
        };
        console.log(median([postData.rating]));
}

export const methods = {
    getMovie,
    getAllMovies,
    addAllMovies,
    updateMovie,
    updatePartOfMovie,
    deleteMovie,
    medianMovie
}