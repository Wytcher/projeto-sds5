import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/dashboard' element={<Dashboard />}></Route>
          </Routes>
      </BrowserRouter>
    );
}

export default Router;
