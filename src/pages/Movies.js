import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchQueryMovies } from "services/fetchMovies";
import { Form, Input, Button } from "../components/Movies/Movies.styled";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Loader } from "../components/Loader/Loader";

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      getQueryMovies(query);
    }
  }, [searchParams]);

  function onSubmit(event) {
    event.preventDefault();
    const { value } = event.target.query;
    const query = value.trim() ? { query: value } : {};
    setSearchParams(query);
  }


  async function getQueryMovies(query) {
    try {
      setStatus('pending');
      const data = await fetchQueryMovies(query);
      setMovies(data);
      setStatus('responded');
    } catch {
      setStatus('rejected');
    }
  }
  return (
  <>    
  <Form onSubmit={onSubmit}>
    <Input type="text" name="query" placeholder="Search..." />
    <Button type="submit">Submit</Button>
  </Form>
   {status === 'responded' && <MoviesList movies={movies} />}
   {status === 'pending' && <Loader />}
   {status === 'rejected' && <h2>Sorry we didn't find this page</h2>}
  </>
  
  )
}

export default Movies;