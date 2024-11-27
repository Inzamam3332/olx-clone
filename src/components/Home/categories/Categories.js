import React from "react";
import { Row, Col } from "antd";
import "antd/dist/reset.css";
import "./Categories.css";

const data = [
  {
    title: "Mobiles",
    image:
      "https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png",
  },
  {
    title: "Vehicles",
    image:
      "https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png",
  },
  {
    title: "Property For Sale",
    image:
      "https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png",
  },
  {
    title: "Property For Rent",
    image:
      "https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png",
  },
  {
    title: "Electronic & Home Appliances",
    image:
      "https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png",
  },
  {
    title: "Bikes",
    image:
      "https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png",
  },
  {
    title: "Business Industrial & Agriculture",
    image:
      "https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png",
  },
  {
    title: "Services",
    image:
      "https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png",
  },
  {
    title: "Jobs",
    image:
      "https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png",
  },
  {
    title: "Animals",
    image:
      "https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png",
  },
  {
    title: "Furniture & Home Decor",
    image:
      "https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png",
  },
  {
    title: "Fashion & Beauty",
    image:
      "https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png",
  },
  {
    title: "Books, Sports & Hobbies",
    image:
      "https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png",
  },
  {
    title: "Kids",
    image:
      "https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png",
  },
];

const Categories = () => {
  return (
    <>
      <div
        style={{ fontWeight: "bold", fontSize: 25 }}
        className="ml-[100px] mt-6"
      >
        All categories
      </div>
      <div style={{ padding: "20px" }} className=" mx-[100px]">
        <Row gutter={[50, 40]}>
          {data.map((item, index) => (
            <Col span={24 / 7} key={index}>
              {
                <img
                  alt={item.title}
                  src={item.image}
                  style={{ borderRadius: 100, height: 100, width: 100 }}
                />
              }
              <div
                style={{
                  height: 50,
                  width: 100,
                  textAlign: "center ",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
                className="flex justify-center align-middle pt-3 "
              >
                {item.title}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Categories;
