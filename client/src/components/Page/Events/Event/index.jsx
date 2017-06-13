// Events
import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import './style.css';

const Event = (props) => {
  console.log('*************hello Laua****************');
  
  const meetupDate = (props) => {
    let dateInfo = new Date(props.date);
    let dateArr = dateInfo.toString().split(' ').slice(0, 5);
    let timeArr = dateArr.pop().split(':').slice(0, 2);
    let dateDetails = {
      date: dateArr.slice(0, 3).join(' '),
      time: formatDate({timeArr}),
    } 

    return `${dateDetails.date} ${dateDetails.time}`;
  }

  

  return (
    <Row>
      <Panel>
        <Col sm={2} md={2}>
         <a href={props.url}>{meetupDate(props)}</a>
        </Col>
        <Col sm={5} md={5}>
          <a href={props.url}>{props.name}</a>
        </Col>
        <Col sm={5} md={5}>
          <a href={props.url}>{props.location}</a>
        </Col>
      </Panel>
    </Row>
  )
};

const formatDate = ({timeArr}) => {
  let hour = parseInt(timeArr.slice(0, 2));
  let minutes = timeArr.slice(1);
  let time = '';
  
  // remove leading 0
  if(hour[0] === '0'){
    hour = hour.toString().slice(1);
    return time = `${hour}:${minutes} AM`;
  // convert military time and add pm  
  }else if(hour > 12){
    hour = hour - 12;
    hour.toString();
    return time = `${hour}:${minutes} PM`;
  //add am
  }else{
    hour.toString();
    return time = `${hour}:${minutes} AM`;
  }
}

export default Event;

