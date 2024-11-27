import LoginProvider from "./components/Pages/login/LoginContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Posts from "./components/Pages/Posts";
import Attributes from "./components/Pages/Attributes";
import dayjs from "dayjs";
import CardInfo from "./components/Pages/CardInfo";
import { message } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";

function App() {
  const newAd = async (formData) => {
    const now = dayjs();

    const res = await fetch("http://localhost:7000/ad", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        createdAt: now.format("YYYY-MM-DD HH:mm:ss"),
      }),
    });
    return res;
  };
  const newVehicle = async (formData) => {
    const now = dayjs();

    const res = await fetch("http://localhost:7000/vehicle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        createdAt: now.format("YYYY-MM-DD HH:mm:ss"),
      }),
    });

    return res;
  };
  const newBike = async (formData) => {
    const now = dayjs();

    const res = await fetch("http://localhost:7000/bikes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        createdAt: now.format("YYYY-MM-DD HH:mm:ss"),
      }),
    });
    return res;
  };
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchQuery) => {
    setSearchTerm(searchQuery);
  };

  return (
    <div className="App">
      <Router>
        <LoginProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sell" element={<Posts />} />
            <Route path="/info" element={<CardInfo />} />
            <Route
              path="/sell/attributes"
              element={
                <Attributes
                  adSubmit={newAd}
                  vehicleSubmit={newVehicle}
                  bikeSubmit={newBike}
                />
              }
            />
          </Routes>
        </LoginProvider>
      </Router>
    </div>
  );
}

export default App;
