import React from 'react';
import {Col, Row, Glyphicon, Panel} from 'react-bootstrap';

const CategoryList = ({categories}) => (
  <div>
    <Row>
      <Col xs={12}>
        <a href={FlowRouter.path('categories.new')}>Add New Category <Glyphicon glyph="plus"></Glyphicon></a>
      </Col>
    </Row>
    {categories.map(category => (
      <Col xs={3} key={category._id}>
        <Panel>
          <h2>{category.name}</h2>
        </Panel>
      </Col>
    ))}
  </div>
);

export default CategoryList;
