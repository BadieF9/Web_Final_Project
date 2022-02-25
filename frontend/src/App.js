import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import CreateMovieScreen from './screens/CreateMovieScreen';
import MovieScreen from './screens/MovieScreen';
import SearchScreen from './screens/SearchScreen';
import GridListContextProvider from './context/GridListContext';

function App() {
  return (
    <GridListContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/search" element={<SearchScreen/>}/>
          <Route path="/new-movie" element={<CreateMovieScreen/>}/>
          <Route path="/movie" element={<MovieScreen/>}/>
        </Routes>
      </BrowserRouter>
    </GridListContextProvider>
  );
}

export default App;
