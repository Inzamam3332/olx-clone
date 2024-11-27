import React from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div style={{ marginTop: 10 }}>
        <div className="flex justify-center mt-14">
          <img
            src="https://s2.adform.net/Banners/65648791/65648791.jpg?bv=2"
            alt=""
          />
        </div>
        <div
          style={{
            backgroundColor: "rgba(0, 47, 52, .03)",
            marginTop: 20,
          }}
        >
          <Row>
            <Col span={4}></Col>

            <Col span={8}>
              <img
                style={{}}
                src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"
                alt=""
              />
            </Col>
            <Col span={8}>
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  margin: "50px 0px 0px 30px",
                }}
              >
                GET YOUR APP TODAY
              </h1>
              <div className="social-links-today">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
                    alt=""
                  />
                </a>

                <a
                  href="https://play.google.com/store/games?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
                    alt=""
                  />
                </a>
                <a
                  href="https://appgallery.huawei.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
                    alt=""
                  />
                </a>
              </div>
            </Col>
            <Col span={4}></Col>
          </Row>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#ebeeef",
          padding: "20px 100px",
          color: "rgba(0,47,52,.64)",
        }}
      >
        <Row justify="center">
          <Col span={4}>
            <h1 className="heading">POPULAR CATEGORIES</h1>
            <ul>
              <li>Cars</li>
              <li>Flats for rent</li>
              <li>Mobile Phones</li>
              <li>Jobs</li>
            </ul>
          </Col>
          <Col span={4}>
            <h1 className="heading">TRENDING SEARCHES</h1>
            <ul>
              <li>Bikes</li>
              <li>Watches</li>
              <li>Books</li>
              <li>Dogs</li>
            </ul>
          </Col>
          <Col span={4}>
            <h1 className="heading">ABOUT US</h1>
            <ul>
              <li>About Dubizzle Group</li>
              <li>OLX Blog</li>
              <li>Contact Us</li>
              <li>OLX for Businesses</li>
            </ul>
          </Col>
          <Col span={4}>
            <h1 className="heading">OLX</h1>
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col span={6}>
            <h1 className="heading">FOLLOW US</h1>
            <div className="social-media">
              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
              </a>
              <a
                href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faFacebook} />
                </span>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faYoutube} />
                </span>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
                  alt=""
                />
              </a>

              <a
                href="https://play.google.com/store/games?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
                  alt=""
                />
              </a>
              <a
                href="https://appgallery.huawei.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
                  alt=""
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <div className="foot">
        <p>Free Classifieds in Pakistan . © 2006-2024 OLX</p>
      </div>
    </>
  );
};

export default Footer;
