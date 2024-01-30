const MoviesCard = ({poster})=>{
    
    return(

        <div className="w-36 pr-5 cursor-pointer hover:scale-110 transition-transform">
            <img className="" src={"https://image.tmdb.org/t/p/w500/"+poster} />
        </div>
    )
}
export default MoviesCard;