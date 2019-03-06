export let movies = [
    {
        id: 1,
        name:"캡틴마블",
        score:1
    },
    {
        id:2,
        name:"항거",
        score:4
    },
    {
        id:0,
        name:"증인",
        score:3
    },
    {
        id:6,
        name:"극한직업",
        score:5
    }
]
export const getMovies = () => movies;
export const getById = id =>{
    const filteredMovies = movies.filter(movie=>movie.id === id)
    return filteredMovies[0]
}

export const deleteMovie = id =>{
    const cleanedMovies = movies.filter(movie => movie.id !== id)
    if(cleanedMovies.length < movies.length){
        movies = cleanedMovies
        return true;
    } else {
        return false;
    }
}