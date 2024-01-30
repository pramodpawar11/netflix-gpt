import MoviesCard from "./MovieCards.js";
const MoviesList = ({ movie,title }) => {
    if (!movie) return;
    return (
        <div>
            <h1 className=" text-white ml-4 text-2xl font-serif">{title}</h1>
            <div className="flex overflow-x-auto scrollbar-none">
                <div className="flex p-5  ">
                    {
                        movie.map((film) =>
                            <MoviesCard key={film.id} poster={film.poster_path} />)
                    }
                </div>
            </div>
        </div>
    )
}
export default MoviesList;