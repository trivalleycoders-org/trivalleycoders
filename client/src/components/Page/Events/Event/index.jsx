// Events
import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import './style.css';


const Event = (props) => (
    <Row>
      <Panel>
        <Col sm={2} md={2}>
          {props.date.substr(0,7)}
        </Col>
        <Col sm={5} md={5}>
          <a href="#" className='text-nowrap'>{props.name}</a>
        </Col>
        <Col sm={5} md={5}>
          {props.location}
        </Col>
      </Panel>
    </Row>
);

export default Event;
