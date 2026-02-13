import Search from "./Pages/Search";
import Home from "./Pages/Home"
import "/src/Styles/global.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />}/>
    </Routes>
  )
}

export default App;
//Componente que renderiza o Home