import { useState, useEffect } from "react";
import { fetchDetailsMovie } from "services/fetchMovies";
import { InfoMovie } from "../components/InfoMovie/InfoMovie";
import { useParams } from "react-router-dom";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../components/Loader/Loader";
import { PageList  } from "../components/PageList/PageList";

const DetailsMovie = () => {
    const { movieId } = useParams();
  
    const [dataMovie, setDataMovie] = useState({});
    const [status, setStatus] = useState('idle');
    useEffect(() => {
      getDetailsMovie(movieId);
    }, [movieId]);
  
    async function getDetailsMovie(movieId) {
      try {
        setStatus('pending');
        const data = await fetchDetailsMovie(movieId);
        setDataMovie(data);
        setStatus('responded');
      } catch {
        setStatus('rejected');
      }
    }
  
    const { title, overview, genres, poster_path, release_date, vote_average } = dataMovie;
  
    return (
      <>
        {status === 'responded' && (
          <>
            <InfoMovie
              genres={genres}
              title={title}
              overview={overview}
              vote_average={vote_average}
              poster_path={poster_path}
              release_date={release_date}
            />
            <PageList />
          </>
        )}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <h2>Sorry we didn't find this page</h2>}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    );
  };
  
  export default DetailsMovie;