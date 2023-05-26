import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./users/Signup";
import Signin from "./users/Signin";
import Profile from "./users/ProfileView";
import Cabins from "./Cabins";
import Home from "./Home";
import Nav from "./Nav";

import "./css/app.css";

function App() {
  return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route index element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/cabins" element={<Cabins />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
