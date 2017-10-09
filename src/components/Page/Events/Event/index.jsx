// Events
import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap';
import styles from './style.css';
import classNames from 'classnames'

const formatDate = ({timeArr}) => {
  let hour = parseInt(timeArr.slice(0, 2), 10);
  let minutes = timeArr.slice(1);

  // remove leading 0
  if(hour[0] === '0') {
    hour = hour.toString().slice(1);
    return `${hour}:${minutes} AM`;
  // convert military time and add pm
  } else if(hour > 12) {
    hour -= 12;
    return `${hour}:${minutes} PM`;
  //add am
  } else {
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

  const rowStyles = classNames({
    [styles.odd]: props.index % 2 === 0,
    [styles.eventsPanel]: true,
  })

// className={props.index % 2 === 0 ? styles.odd : ''}
  return (

    <Row className={rowStyles}>
      <Col className={styles.nameCol} sm={5} md={5} lg={5}>
        <a id='nameAnchor' href={props.url}>{props.name}</a>
      </Col>
      <Col sm={4} md={4} lg={4}>
        <p className={styles.locationName}><i>{`${props.locationName}`}</i></p>
        <p className={styles.locationAddress}>{props.locationAddress}</p>
        <p>{props.locationCity}</p>
      </Col>
      <Col sm={3} md={3} lg={3}>
        {meetupDate(props)}
      </Col>
    </Row>
  )
};

export default Event;
