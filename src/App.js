import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./HomePageComponents/HomePage";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>

            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
