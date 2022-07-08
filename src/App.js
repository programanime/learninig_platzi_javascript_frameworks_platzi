import './App.css';
import Form from './Form';

const movies = [
  {
    name: "Avangers",
    available: 5
  },
  {
    name: "Doctor strange",
    available: 10
  }
]

function App() {
  return (
    <>
      <h2>Peliculas</h2>
      {movies.map((movie) => (
        <div>
          <Form {...movie} />
        </div>
      ))}
    </>
  );
}

export default App;
