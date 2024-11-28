import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import ProductCard from "./ProductCard";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Cars = ({ searchTerm }) => {
  const [viewMore, setViewMore] = useState(false);
  const [Vehicle, setVehicle] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  console.log({ selectedCard });
  useEffect(() => {
    setSelectedCard(null);
  }, []);
  useEffect(() => {
    if (selectedCard) {
      navigate("/info", {
        state: {
          selectedCard,
        },
      });
    }
  }, [selectedCard]);
  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const res = await fetch(
          `http://localhost:7000/vehicle?_limit=${viewMore ? 100 : 4}`
        );
        const vehicledata = await res.json();
        // console.log({ vehicledata });
        setVehicle(vehicledata);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchVehicle();
  }, [viewMore]);

  const handleDelete = async (id) => {
    try {
      // Send DELETE request to the server
      await fetch(`http://localhost:7000/vehicle/${id}`, {
        method: "DELETE",
      });

      // Remove the ad from the state
      setVehicle(Vehicle.filter((ad) => ad.id !== id));
    } catch (error) {
      console.log("Error deleting ad", error);
    }
  };

  const setCardInfo = (card) => {
    setSelectedCard(card);
  };

  return (
    <div
      id="car-section"
      style={{ padding: "0px 5px 0px 5px", overflowX: "hidden" }}
    >
      <div style={{ marginTop: 40, marginBottom: 10 }}>
        <Row>
          <Col style={{ fontWeight: "bolder", fontSize: 23 }} span={12}>
            Cars
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: 8,
              color: "blueviolet",
              fontWeight: "bolder",
              fontSize: 16,
              paddingTop: 5,
              cursor: "pointer",
            }}
            span={12}
            onClick={() => setViewMore(!viewMore)}
          >
            {viewMore ? "View Less" : "View more"}
            <RightOutlined style={{ paddingBottom: 6, paddingLeft: 9 }} />
          </Col>
        </Row>
      </div>

      <Row gutter={[16, 16]}>
        {Vehicle.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((product, index) => (
          <Col key={index} span={6} onClick={() => setCardInfo(product)}>
            <ProductCard
              id={product.id}
              image={product.images}
              title={product.title}
              price={product.productPrice}
              location={product.location}
              time={product.createdAt}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cars;
