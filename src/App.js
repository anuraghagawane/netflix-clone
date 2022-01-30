import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";
import Rows from "./Rows";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner />
      <Rows
        Title="NETFLIX ORIGINALS"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Rows>
      <Rows Title="Trending Now" fetchurl={requests.fetchTrending}></Rows>
      <Rows Title="Top Rated" fetchurl={requests.fetchTopRated}></Rows>
      <Rows Title="Action Movies" fetchurl={requests.fetchActionMovies}></Rows>
      <Rows Title="Comedy Movies" fetchurl={requests.fetchComedyMovies}></Rows>
      <Rows Title="Horror Movies" fetchurl={requests.fetchHorroMovies}></Rows>
      <Rows
        Title="Romance Movies"
        fetchurl={requests.fetchRomanceMovies}
      ></Rows>
      <Rows Title="Documentaries" fetchurl={requests.fetchDocumentaries}></Rows>
    </div>
  );
}

export default App;
