import React from "react";
import { useState } from "react";
import { Row, Col, Button } from "antd";
import { RightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { ReactComponent as Olxicon } from "../images/olx.svg";
import { useNavigate } from "react-router-dom";

// Dummy data for categories
const categories = [
  {
    name: "Mobiles",
    image:
      "https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png",
    subcategories: ["Tablets", "Accessories", "Smart Watches", "Mobile Phones"],
  },
  {
    name: "Vehicles",
    image:
      "https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png",
    subcategories: ["Cars", "Buses", "Boats", "Tractors"],
  },
  {
    name: "Property for Sale",
    image:
      "https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png",
  },
  {
    name: "Property for Rent",
    image:
      "https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png",
  },
  {
    name: "Electronics & Home Appliances",
    image:
      "https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png",
  },
  {
    name: "Bikes",
    image:
      "https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png",
    subcategories: ["Standard", "Electric Bike", "Heavy Bike", "Cruiser"],
  },
  {
    name: "Business Industrial & Agriculture",
    image:
      "https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png",
  },
  {
    name: "Services",
    image:
      "https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png",
  },
  {
    name: "Jobs",
    image:
      "https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png",
  },
  {
    name: "Animals",
    image:
      "https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png",
  },
  {
    name: "Furniture & Home Decor",
    image:
      "https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png",
  },
  {
    name: "Fashion & Beauty",
    image:
      "https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png",
  },
  {
    name: "Kids",
    image:
      "https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png",
  },
];

const Posts = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory?.name === category.name) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const handlesubcategory = (subcategory, category) => {
    navigate("/sell/attributes", {
      state: {
        category,
        subcategory,
      },
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          height: 60,
          width: "100%",
          backgroundColor: "whitesmoke",
          gap: 15,
          paddingLeft: 10,
        }}
      >
        <Button
          onClick={back}
          style={{
            paddingTop: 27,
            backgroundColor: "whitesmoke",
            border: "none",
            boxShadow: "none",
          }}
        >
          <ArrowLeftOutlined style={{ fontSize: 25 }} />
        </Button>
        <Olxicon />
      </div>
      <h1 className="flex justify-center font-bold text-xl">POST YOUR AD</h1>
      <div style={{ padding: "20px" }}>
        <h2
          style={{
            marginBottom: 20,
            marginLeft: 70,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Choose a category
        </h2>

        <Row gutter={[16, 16]}>
          {categories.map((category, index) => (
            <Col
              // span={7}
              span={selectedCategory ? 24 : 7}
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Button
                onClick={() => handleCategoryClick(category)}
                style={{
                  marginLeft: 70,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 20px",
                  width: selectedCategory ? "360px" : "100%",
                  height: 80,
                  border: "1px solid #6D6D6D",
                  borderRadius: "8px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "25px",
                      marginRight: "15px",
                    }}
                  >
                    <img src={category.image} alt="" />
                  </div>
                  <span style={{ fontWeight: "500", fontSize: "14px" }}>
                    {category.name}
                  </span>
                </div>
                <RightOutlined style={{ fontSize: "30px" }} />
              </Button>

              {/* Subcategories */}
              {selectedCategory?.name === category.name && (
                <Col span={7}>
                  <div
                    style={{
                      marginLeft: 70,
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  >
                    {selectedCategory.subcategories.map(
                      (subcategory, index) => (
                        <div
                          key={index}
                          style={{
                            border: "1px solid #6D6D6D",
                            borderRadius: "8px",
                            padding: "10px 20px",
                            marginBottom: "10px",
                            marginLeft: 108,
                            backgroundColor: "#f9f9f9",
                            width: "100%",
                          }}
                        >
                          <Button
                            onClick={() =>
                              handlesubcategory(subcategory, selectedCategory)
                            }
                            style={{
                              backgroundColor: "#f9f9f9",
                              border: "none",
                              textDecoration: "none",
                              height: "100%",
                              width: "105%",
                              boxShadow: "none",
                              margin: 0,
                              padding: 0,
                            }}
                          >
                            {subcategory}
                          </Button>
                        </div>
                      )
                    )}
                  </div>
                </Col>
              )}
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Posts;
