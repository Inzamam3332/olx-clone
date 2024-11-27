import React from "react";
import { Menu } from "antd";

import "./Navbar.css";
import { Col, Row } from "antd";
import cars from "../../images/cars.jpeg";
import offer from "../../images/offer.jpeg";

import Navcatagories from "./Navcatagories";

const Navbar = () => {
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
  return (
    <div style={{ overflowX: "hidden" }}>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className="menu"
      >
        <span>
          <Navcatagories />
        </span>

        <Menu.Item className="menu-item" key="1" onClick={handleScrollToMobile}>
          Mobile Phone
        </Menu.Item>
        <Menu.Item className="menu-item" key="2" onClick={handleScrollToCar}>
          Cars
        </Menu.Item>
        <Menu.Item className="menu-item" key="3" onClick={handleScrollToBike}>
          Motorcycle
        </Menu.Item>
        <Menu.Item className="menu-item" key="4">
          Houses
        </Menu.Item>
        <Menu.Item className="menu-item" key="5">
          Video-Audios
        </Menu.Item>
        <Menu.Item className="menu-item" key="6">
          Tablets
        </Menu.Item>
        <Menu.Item className="menu-item" key="7">
          Land & Plots
        </Menu.Item>
      </Menu>
      <Row gutter={24} className="slider mt-4">
        <Col span={24}>
          <div className="slider-container">
            <img src={cars} alt="" className="sliding-image" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col flex={1}></Col>
        <Col span={16}>
          <img
            src={offer}
            alt=""
            className="ml-10 mt-6"
            style={{
              height: 90,
              width: "auto",

              placeItems: "center",
            }}
          />
        </Col>

        <Col flex={1}></Col>
      </Row>
    </div>
  );
};

export default Navbar;
