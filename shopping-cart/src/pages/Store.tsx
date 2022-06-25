import React from 'react'
import storeItems from "../data/item.json"
import { Row, Col } from "react-bootstrap"

function Store() {
  return (
    <>
      <div>Store</div>
      <Row>
        {storeItems.map(item => {
          return (
            <Col>{JSON.stringify(item)}</Col>
          )
        })}
      </Row>
    </>
  )
}

export default Store