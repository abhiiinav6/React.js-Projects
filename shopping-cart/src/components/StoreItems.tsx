import React from "react";
import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItems({ id, name, price, imgUrl }: StoreItemProps) {
  let quantity = 1;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="text-muted ms-2">{formatCurrency(price)}</span>
        </Card.Title>

        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">Add to cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button>+</Button>
                <div>
                  <span className="fs-3">{quantity}</span>
                  <span>in cart</span>
                </div>
                <Button>-</Button>
              </div>
              <Button variant="danger">Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItems;
