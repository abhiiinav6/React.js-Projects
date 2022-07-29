import React from "react";
import { useShoppingCart } from "../context/shoppingCartContext";
import storeItems from "../data/item.json";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItems({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const Item = storeItems.find((item) => item.id === id);
  if (Item == null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-align-items-center"
    >
      <img
        src={Item.imgUrl}
        alt=""
        style={{ width: "120px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          <span style={{ fontSize: "1.2rem" }}>{Item.name}</span>
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(Item.price)}
        </div>
      </div>
      <div>{formatCurrency(Item.price * quantity)}</div>
      <Button
        onClick={() => removeFromCart(Item.id)}
        variant="outline-danger"
        size="sm"
      >
        &times;
      </Button>
    </Stack>
  );
}

export default CartItems;
