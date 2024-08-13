import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Movielist from "./components/Movielist";
import Toprated from "./components/Toprated";
import Action from "./components/Action";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/upcoming" element={<Movielist/>}/>
        <Route path="/top_rated" element={<Toprated/>}/>
        <Route path="/Action" element={<Action/>}/>
      </Routes>


    </div>
  );
}

export default App;
