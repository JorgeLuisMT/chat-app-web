import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./components/PrivateRoutes";
import NotFound from "./components/NotFound";
import { useState } from "react";
import Login from "./components/Login";
import "./App.css";
import Register from "./components/Register";
import HomeLayout from "./components/HomeLayout";

function App() {
  const [auth, setAuth] = useState(true);

  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/register" element={<Register setAuth={setAuth} />} />
          <Route element={<PrivateRoutes auth={auth} />}>
            <Route path="/" element={<HomeLayout />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
