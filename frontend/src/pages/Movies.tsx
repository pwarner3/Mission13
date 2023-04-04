import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function MoviePage() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      const rsp = await fetch('https://localhost:4000/api/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };

    fetchFood();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <h1>Movie Collection</h1>
      </div>

      <div className="d-flex justify-content-center">
        <div className="col-10 mt-3">
          <table className="table table-striped">
            <thead
              className="text-light"
              style={{ backgroundColor: 'darkslategray' }}
            >
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
                <th>Lent To</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {movieData.map((m) => (
                <tr key={m.movieId}>
                  <td>{m.title}</td>
                  <td>{m.year}</td>
                  <td>{m.director}</td>
                  <td>{m.rating}</td>
                  <td>{m.category}</td>
                  <td>{m.edited}</td>
                  <td>{m.lentTo}</td>
                  <td>{m.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
