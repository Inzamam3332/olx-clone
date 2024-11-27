import React from "react";
import { Row, Col, Button } from "antd";
import ProductCard from "./ProductCard";
import { RightOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MobilePhones = ({ products = [], searchTerm }) => {
  const [Ad, setAd] = useState([]);
  const [viewMore, setViewMore] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();
  console.log("searchTerm >>", searchTerm);

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const res = await fetch(
          `http://localhost:7000/ad?_limit=${viewMore ? 100 : 4}`
        );
        const data = await res.json();
        // console.log(data);
        setAd(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchAd();
  }, [viewMore]);
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
  const setCardInfo = (card) => {
    setSelectedCard(card);
  };

  const handleDelete = async (id) => {
    try {
      // Send DELETE request to the server
      await fetch(`http://localhost:7000/ad/${id}`, {
        method: "DELETE",
      });

      // Remove the ad from the state
      setAd(Ad.filter((ad) => ad.id !== id));
    } catch (error) {
      console.log("Error deleting ad", error);
    }
  };
  return (
    <div
      id="mobile-section"
      style={{ padding: "0px 5px 0px 5px", overflowX: "hidden" }}
    >
      <div style={{ marginTop: 40, marginBottom: 10 }}>
        <Row>
          <Col style={{ fontWeight: "bolder", fontSize: 23 }} span={12}>
            Mobile Phones
          </Col>

          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: 8,
              color: "blueviolet",
              fontWeight: "bolder",
              fontSize: 15,
              paddingTop: 5,
              cursor: "pointer",
            }}
            span={12}
            onClick={() => setViewMore(!viewMore)}
          >
            {viewMore ? "View Less " : "View more"}
            <RightOutlined style={{ paddingBottom: 6, paddingLeft: 9 }} />
          </Col>
        </Row>
      </div>

      <Row gutter={[16, 16]}>
        {Ad.filter((product) =>
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

export default MobilePhones;
