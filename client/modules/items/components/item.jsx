import React from 'react';
import {Row, Col, Panel, Glyphicon, Input} from 'react-bootstrap';

const Item = ({item}) => (
  <Col xs={4}>
    <Panel>
      <Row>
        <Col xs={10}>
          <h2>{item.name}</h2>
        </Col>
        <Col xs={2}>
          <a href={`/edit/${item._id}`}>
            <Glyphicon glyph="pencil"></Glyphicon>
          </a>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p>{item.description}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Input type="checkbox" label="Complete?"/>
        </Col>
      </Row>
    </Panel>
  </Col>
);

export default Item;
