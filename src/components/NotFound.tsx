import NotFoundProp from "../interfaces/NotFoundProp";
import "../style/NotFound.css";

const NotFound = ({ movie }: NotFoundProp) => {
    return (
        <>
            <div className="not-found-box">
                <h1>We don't have <span>{movie.toUpperCase()}</span></h1>
                <br />
                <h2>So sorry 😥</h2>
            </div>
        </>
    )
}

export default NotFound;