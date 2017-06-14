// Events
import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap';
import './style.css';


const Event = (props) => {
  const meetupDate = () => {
    return props.name
  }
  return (
    <Row>
      <Panel>
        <Col sm={2} md={2}>
          {meetupDate}
        </Col>
        <Col sm={5} md={5}>
          <a href="#">{props.name}</a>
        </Col>
        <Col sm={5} md={5}>
          location
        </Col>
      </Panel>
    </Row>
  )
};

export default Event;
