import React from "react";
import storeItems from "../data/item.json";
import { Row, Col, Button } from "react-bootstrap";
import StoreItems from "../components/StoreItems";

function Store() {
  return (
    <div>
      <div className="mb-4" style={{ textAlign: "left" }}>
        <h1>Home</h1>
      </div>
      <Row lg={3} md={2} xs={1} className="g-3">
        {storeItems.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItems {...item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Store;
