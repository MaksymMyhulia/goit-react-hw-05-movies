import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchQueryMovies } from "services/fetchMovies";
import { Input, Button } from "../components/Movies/Movies.styled";
import { MoviesList } from "components/MoviesList/MoviesList";

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    const search = searchParams.get("query")
    if(search) {
       getQueryMovies();
    }
  }, [searchParams])

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
    <form onSubmit={onSubmit}>
      <Input type="text" name="query" placeholder="Search..." />
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default Movies;