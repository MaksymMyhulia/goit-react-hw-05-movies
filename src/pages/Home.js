import { useEffect, useState } from "react";
import { fetchMovies } from "services/fetchMovies";


const Home = () => {
const [movies, setMovies] = useState(null);
const [status, setStatus] = useState('idle');

useEffect(() => {
    getMovies();
}, [])


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
    </>
)    
  }
}  

export default Home;