export let movies = [
    {
        id: 0,
        name:"캡틴마블",
        score:1
    },
    {
        id:1,
        name:"항거",
        score:4
    },
    {
        id:2,
        name:"증인",
        score:3
    },
    {
        id:3,
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
};

export const addMovie=(name, score)=>{
    const newMovie={
        //id값 순차적으로 적용해주기 위해
        id:`${movies.length+1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};