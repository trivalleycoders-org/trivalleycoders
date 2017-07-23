// Events
import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap';
import './style.css';


const formatDate = ({timeArr}) => {
  let hour = parseInt(timeArr.slice(0, 2), 10);
  let minutes = timeArr.slice(1);

  // remove leading 0
  if(hour[0] === '0'){
    hour = hour.toString().slice(1);
    return `${hour}:${minutes} AM`;
  // convert military time and add pm
  }else if(hour > 12){
    hour -= 12;
    return `${hour}:${minutes} PM`;
  //add am
  }else{
    return `${hour}:${minutes} AM`;
  }
}

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
    <Row className={props.index % 2 !== 0 ? 'odd' : ''}>
      <Panel className='events-panel'>
        <Col className='event-name-col' sm={5} md={5} lg={5}>
          <a id='event-name-anchor' href={props.url}>{props.name}</a>
        </Col>
        <Col sm={4} md={4} lg={4}>
          <p className='event-location-name'><i>{`${props.locationName}`}</i></p>
          <p className='event-location-address'>{props.locationAddress}</p>
          <p>{props.locationCity}</p>
        </Col>
        <Col sm={3} md={3} lg={3}>
          {meetupDate(props)}
        </Col>
      </Panel>
    </Row>
  )
};

export default Event;
