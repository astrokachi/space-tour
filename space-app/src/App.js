import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  const [state, setState] = useState(false);
  const [activeId, setActiveId] = useState();
  const [tags] = useState([
    {
      number: "0",
      name: "Home",
      state: 'active'
    },
    {
      number: "1",
      name: "Destination",
      state: ''
    },
    {
      number: "2",
      name: "Crew",
      state: ''
    },
    {
      number: "3",
      name: "Technology",
      state: ''
    },
  ]);

  const handleClick = () => {
    setState(!state);
  };




  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path='/' element={ <Home state={state} handleClick={handleClick} tags={tags} setActiveId={setActiveId} activeId={activeId}/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
