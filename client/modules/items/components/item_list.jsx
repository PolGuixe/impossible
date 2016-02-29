import React from 'react';
import Item from './item.jsx';
import {Row, Col, Glyphicon} from 'react-bootstrap';

const ItemList = ({content = () => null }) => (
  <Row>
    <Col xs={12} sm={6}>
      <ItemProgress />
    </Col>
  </Row>
  <Row className="show-grid">
    <Col xs={12}>
      <a href="/edit"><Glyphicon glyph="plus"></Glyphicon> New Item</a>
    </Col>
    <Item />
  </Row>
);

export default ItemList;
