import React from "react";
import { Select } from "antd";
import "./Navcatagories.css";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const handleScrollToMobile = () => {
  const mobileSection = document.getElementById("mobile-section");
  if (mobileSection) {
    mobileSection.scrollIntoView({ behavior: "smooth" });
  }
};
const handleScrollToCar = () => {
  const carsection = document.getElementById("car-section");
  if (carsection) {
    carsection.scrollIntoView({ behavior: "smooth" });
  }
};
const handleScrollToBike = () => {
  const bikesection = document.getElementById("bike-section");
  if (bikesection) {
    bikesection.scrollIntoView({ behavior: "smooth" });
  }
};
const Navcatagories = () => (
  <Select
    defaultValue="ALL CATEGORIES"
    className="custom-select"
    style={{
      width: 180,
    }}
    onChange={handleChange}
    options={[
      {
        label: <span onClick={handleScrollToMobile}>Mobiles</span>,
        title: "Mobiles",
        options: [
          {
            label: <span onClick={handleScrollToMobile}>Tablet</span>,
            value: "tablet",
          },
          {
            label: <span onClick={handleScrollToMobile}>Accessories</span>,
            value: "acessories",
          },
        ],
      },
      {
        label: <span onClick={handleScrollToCar}>Vehicle</span>,
        title: "vehicle",
        options: [
          {
            label: <span onClick={handleScrollToCar}>Cars</span>,
            value: "cars",
          },
          {
            label: <span onClick={handleScrollToCar}>Buses</span>,
            value: "buses",
          },
        ],
      },
      {
        label: <span onClick={handleScrollToBike}>Bike</span>,
        title: "bike",
        options: [
          {
            label: <span onClick={handleScrollToBike}>Electric</span>,
            value: "electric",
          },
          {
            label: <span onClick={handleScrollToBike}>Heavy Bike</span>,
            value: "heavybike",
          },
        ],
      },
    ]}
  />
);
export default Navcatagories;
