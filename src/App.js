import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import requests from './Requests';
function App() {
  return (
    <div className="app">
      {/* <h1>HEllo VILLY GULLU its netflix clone</h1> */}
      <Nav/>
      <Banner/>
    <Row 
    title="NETFLIX ORIGINALS" 
    isLargeRow
    fetchUrl={requests.fetchNetflixOriginals}></Row>
    <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}></Row>
    <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies}></Row>
    <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}></Row>
   <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies}></Row>

    </div>
  );
}

export default App;
