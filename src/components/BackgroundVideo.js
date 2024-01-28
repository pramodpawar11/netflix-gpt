import { useSelector } from "react-redux";
import useBackgroundTrailer from "../hooks/useBackgroundTrailer"

const BackgroundVideo = ({ movieId }) => {
    useBackgroundTrailer(movieId);
    const moviesVideos = useSelector((store) => store.movies?.moviesTrailer);
    return (
        <div>
            <div className="w-screen h-screen">
            <iframe className="w-screen h-screen" src={"https://www.youtube.com/embed/"+moviesVideos?.key+"?&autoplay=1"} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </div>
    )
    }
export default BackgroundVideo