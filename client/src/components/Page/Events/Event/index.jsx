// Events
import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import './style.css';

const Event = (props) => {
  
  const meetupDate = (props) => {
    let dateInfo = new Date(props.date);
    let dateArr = dateInfo.toString().split(' ').slice(0, 5);
    let timeArr = dateArr.pop().split(':').slice(0, 2);
    let details = {
      date: dateArr.slice(0, 3).join(' '),
      time: formatDate({timeArr}),
    } 
    return `${details.date}, ${details.time}`;
  }
  return (
    <Row>
      <Panel className='events-panel'>
        <Col sm={5} md={5} lg={5}>
          <a href={props.url}>{props.name}</a>
        </Col>
        <Col sm={4} md={4} lg={4}>
          <strong>{`${props.locationName}`}</strong><br/>
          {`${props.locationAddress}, 
          ${props.locationCity}`}
        </Col>
         <Col sm={3} md={3} lg={3}>
         {meetupDate(props)}
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
    return time = `${hour}:${minutes} PM`;
  //add am
  }else{
    return time = `${hour}:${minutes} AM`;
  }
}

export default Event;
