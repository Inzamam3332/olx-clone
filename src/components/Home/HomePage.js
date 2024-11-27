import React, { useState } from "react";

import Cars from "./categories/Cars";
import Categories from "./categories/Categories";
import Header from "./Header/Header";
import MobilePhones from "./categories/MobilePhones";
import Navbar from "./Navbar/Navbar";
import Bikes from "./categories/Bikes";
import Footer from "./Footer/Footer";
import LoginForm from "../Pages/login/LoginForm";
import adsData from "../../olx.json";

const products = [
  {
    image: "https://images.olx.com.pk/thumbnails/480676087-800x600.webp ",
    price: "Rs 87,500",
    title: "iPhone 12 Pro Max",
    location: "Lahore, Pakistan",
    time: "2024-08-30T14:48:00.000Z",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/483231487-800x600.webp",
    price: "Rs 45,000",
    title: "Vivo",
    location: "Karachi, Pakistan",
    time: "2023-09-05T10:30:00.000Z",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/480049827-800x600.webp",
    price: "Rs 65,000",
    title: "OnePlus Nord",
    location: "Islamabad, Pakistan",
    time: "2023-09-01T08:22:00.000Z",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/480049832-800x600.webp",
    price: "Rs 45,600",
    title: "OnePlus 9",
    location: "Lahore, Pakistan",
    time: "2024-03-02T11:15:00.000Z",
  },
];
const carsdata = [
  {
    image: "https://images.olx.com.pk/thumbnails/465019890-800x600.webp ",
    price: "Rs 4,825,000",
    title: "Mitsubishi Pajero 1994",
    location: "DHA Phase 8, Karachi",
    running: "12500km . 2012",
    time: "2024-08-30T14:48:00.000Z",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/484417827-800x600.webp",
    price: "Rs 1,450,000",
    title: "Suzuki Cultus VXR 2011 Power Steering",
    location: "Ghauri Town, Islamabad",
    running: "15500km . 2014",

    time: "2023-09-05T10:30:00.000Z",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/483098061-800x600.webp",
    price: "Rs 5,800,000",
    title: "Honda City 6th Generation 2023 1.5L ASPIRE CVT for Sale",
    location: "Islamabad, Pakistan",
    running: "10500km .2023",

    time: "2023-09-01T08:22:00.000Z",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/425929820-800x600.webp",
    price: "Rs 5,495,000",
    title: "7 seater Up spectrum Toyota Avanza",
    location: "Lahore, Pakistan",
    running: "12500km . 2020",

    time: "2024-03-02T11:15:00.000Z",
  },
];
const bikesdata = [
  {
    image: "https://images.olx.com.pk/thumbnails/483174061-800x600.webp ",
    price: "Rs 210,000",
    title: "Honda CG-125 2023 with Special Number",
    location: "DHA Phase 8, Karachi",
    time: "2024-08-30T14:48:00.000Z",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/484266778-800x600.webp",
    price: "Rs 199,999",
    title: "Yamaha 125cc for sale in v good condition",
    location: "Golra Mor, Islamabad",

    time: "2023-09-05T10:30:00.000Z",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/447498737-800x600.webp",
    price: "Rs 750,000",
    title: "Kawasaki ninja 250cc brand new 2024",
    location: "Township - Sector B1, Lahore",
    time: "2023-09-01T08:22:00.000Z",
  },
  {
    image: "https://images.olx.com.pk/thumbnails/484003713-800x600.webp",
    price: "Rs 100,000",
    title: "HONDA CG 125 2016 MODEL RED COLOUR",
    location: "Lahore, Pakistan",

    time: "2024-03-02T11:15:00.000Z",
  },
];
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchQuery) => {
    setSearchTerm(searchQuery);
  };
  return (
    <div>
      <Header onSearch={handleSearch} />
      <LoginForm />
      <Navbar />
      <Categories />
      <MobilePhones products={products} searchTerm={searchTerm} />
      <Cars carsdata={carsdata} searchTerm={searchTerm} />
      <Bikes bikesdata={bikesdata} searchTerm={searchTerm} />

      <Footer />
    </div>
  );
};

export default HomePage;
