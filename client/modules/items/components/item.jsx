import React from 'react';
import {Col, Panel} from 'react-bootstrap';

const Item = ({content=() => null}) =>(
  <Col md={4}>
    <h2>Thing to do</h2>
    <br></br>
    <p>Some details about the thing that needs to be done.</p>
  </Col>
);

export default Item;
