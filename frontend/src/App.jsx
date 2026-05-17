import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./components/PrivateRoutes";
import NotFound from "./components/NotFound";
import { useState } from "react";
import Login from "./components/Login";
import "./App.css";
import Register from "./components/Register";
import HomeLayout from "./components/HomeLayout";
import ProfileConfiguration from "./components/ProfileConfiguration";
import "./styles/Configuration.css";
import ChatConfiguration from "./components/ChatConfiguration";

let friends = [
  { user_name: "ñlsdj", status: "accepted", user_id: "123" },
  { user_name: "ñlsdj", status: "accepted", user_id: "123455" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12344" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12343" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12342" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12341" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12340" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12349" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12348" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12347" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12346" },
  { user_name: "ñlsdj", status: "accepted", user_id: "12345" },
];

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
            <Route path="/chat/:id" element={<HomeLayout />} />
            <Route
              path="/user/configuration"
              element={<ProfileConfiguration />}
            />
            <Route
              path="/chat/:id/configuration"
              element={<ChatConfiguration friends={friends} />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
