// Events
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './style.css';
import classNames from 'classnames'
import A from '../../../../elements/A'

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
    [styles.bgYellow]: true,
  })

  return (
    <Row className={rowStyles}>
      <Col className={styles.nameCol} sm={5} md={5} lg={5}>
        <A href={props.url} fontColor={'green'}>{props.name}</A>
      </Col>
      <Col sm={3} md={3} lg={3}>
        <div className={styles.dateCol}>
          {meetupDate(props)}
        </div>
      </Col>
      <Col sm={4} md={4} lg={4}>
        <div className={styles.addressCol}>
          <div className={styles.locationName}>{`${props.locationName}`}</div>
          <div className={styles.locationAddress}>{props.locationAddress}</div>
          <div>{props.locationCity}</div>
        </div>
      </Col>
    </Row>
  )
};

export default Event;
