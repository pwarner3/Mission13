import data from '../MovieData.json';

const MDS = data.MovieData;

function MoviePage() {
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
              </tr>
            </thead>
            <tbody>
              {MDS.map((m) => (
                <tr>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                  <td>{m.Edited}</td>
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
