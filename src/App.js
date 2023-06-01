import { useState } from "react";
import "./App.css";
import Details from "./Components/Details";
import NavBar from "./Components/NavBar";
import ShowArea from "./Components/ShowArea";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar setSearch={setSearch} />
                <ShowArea search={search}/>
              </>
            }
          />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
