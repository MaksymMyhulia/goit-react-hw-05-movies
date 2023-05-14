import { useEffect, useState } from "react";
import { fetchMovies } from "services/fetchMovies";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Loader } from "../components/Loader/Loader";


const Home = () => {
const [movies, setMovies] = useState(null);
const [status, setStatus] = useState('idle');

useEffect(() => {
  getMovies();
}, []);


async function getMovies() {
    try {
      setStatus('pending');
      const data = await fetchMovies();
      setMovies(data);
      setStatus('responded');
    } catch {
      setStatus('rejected');
    }

return (
    <>
     <h1>Movies are trending today</h1>
      {status === 'responded' && <MoviesList movies={movies} />}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Sorry we didn't find this page</h2>}
    </>
)    
  }
}  

export default Home;