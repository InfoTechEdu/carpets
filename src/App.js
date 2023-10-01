import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Carpet from "./pages/Carpet";
import Error from "./pages/Error";
import { Toaster } from "react-hot-toast";


function App() {
  
  return (
    <BrowserRouter>
      <Toaster />
      <div className="App">
          <Routes>
              <Route path="/" element={<Main />}/>
              <Route path="/carpet/:id" element={<Carpet />}/>
              <Route path="/*" element={<Error />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
