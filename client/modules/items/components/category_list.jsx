import React from 'react';
import {Col,Panel} from 'react-bootstrap';

const CategoryList =({categories}) => (
  {categories.map(category) => (
    <Col xs={3} key={category._id}>
      <Panel>
        <h2>{category.name}</h2>
      </Panel>
    </Col>
  )}
);

export default CategoryList;
