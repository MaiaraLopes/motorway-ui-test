import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./App.css";
import { FormValidation } from "./FormValidation";

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <FormValidation />
      <Container className="container-photos">
        <div className="app">
          {images &&
            images.map((img) => (
              <div key={img.id}>
                <Row className="row justify-content-center">
                  <Col md={4} style={{ margin: "1em" }}>
                    <Card className="card">
                      <img
                        className="image-cars"
                        src={`${img.url}.jpg`}
                        alt=""
                      />
                    </Card>
                  </Col>

                  <Col md={4} style={{ margin: "1em" }}>
                    <Card className="card">
                      <img
                        className="image-users"
                        src={`${img.user.profile_image}.webp`}
                        alt=""
                      />
                    </Card>
                  </Col>
                </Row>
              </div>
            ))}
        </div>
      </Container>
    </>
  );
};

export default App;
