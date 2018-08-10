// Member
import React from 'react';
import styles from './style.css';
import Identicon from './../../Identicon'
// import * as ku from '../../../../lib/ke-utils'

const Member = (props) => {

  const getPicture = () => {
    if (!props.picture) {
      return <Identicon
        hash={props._id}
             />
    } else {
      return (
        <a href={props.url}>
          <img className={styles.memberImg} src={props.picture} alt='member' />
        </a>
      )
    }
  }
  return (
    <div className={styles.memberItem}>
      {getPicture()}
      <div className={styles.titles}>
        <div className={styles.memberName}>{props.name}</div>
        <div className={styles.memberRole}>{props.role}</div>
      </div>
    </div>
  )
};

export default Member;
