import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";

function App() {
  const [state, setState] = useState(false);
  const [activeId, setActiveId] = useState(0);
  const [tags] = useState([
    {
      number: "0",
      name: "home",
      state: "active",
    },
    {
      number: "1",
      name: "destination",
      state: "",
    },
    {
      number: "2",
      name: "crew",
      state: "",
    },
    {
      number: "3",
      name: "technology",
      state: "",
    },
  ]);

  const handleClick = () => {
    setState(!state);
  };

  const setItem = (item) => {
    setActiveId(item.number);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                state={state}
                handleClick={handleClick}
                tags={tags}
                setItem={setItem}
                activeId={activeId}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                state={state}
                handleClick={handleClick}
                tags={tags}
                setItem={setItem}
                activeId={activeId}
              />
            }
          />
          <Route
            path="/destination"
            element={
              <Destination
                state={state}
                handleClick={handleClick}
                tags={tags}
                setItem={setItem}
                activeId={activeId}
              />
            }
          />
          <Route
            path="/crew"
            element={
              <Crew
                state={state}
                handleClick={handleClick}
                tags={tags}
                setItem={setItem}
                activeId={activeId}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <Technology
                state={state}
                handleClick={handleClick}
                tags={tags}
                setItem={setItem}
                activeId={activeId}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
