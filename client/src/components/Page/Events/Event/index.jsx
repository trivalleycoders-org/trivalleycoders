// Events
import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import './style.css';


const Event = (props) => {
  console.log('*************hello Laua****************');
  // const mapStateToProps = (state) => {
  const meetupDate = () => {
    return props.name
    // return theDate;
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
