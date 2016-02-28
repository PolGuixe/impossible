import React from 'react';
import {Row, Col} from 'react-bootstrap';

const ItemList = ({content = () => null }) => (
  <Row className="show-grid">
    <Col xs={12}>
      <h1>This is where the items will be.</h1>
    </Col>
  </Row>
);

export default ItemList;
