import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Candidate from "./pages/Candidate";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home /> }/>
        <Route path="/success" element={ <Success /> }/>
        <Route path="/candidato" element={ <Candidate /> }/>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
