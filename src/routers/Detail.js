import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MovieDetail from "../components/MoveiDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const API_URL = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
  const getMovie = async () => {
    const json = await (await fetch(API_URL)).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  });
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>
            <Link to="/">
              <h2>Home &rarr;</h2>
            </Link>
          </div>
          <MovieDetail
            coverImg={movie.large_cover_image}
            title={movie.title}
            rating={movie.rating}
            genres={movie.genres}
            year={movie.year}
            runtime={movie.runtime}
            description={movie.description_full}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
