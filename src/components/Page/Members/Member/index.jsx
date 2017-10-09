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
      return <img className={styles.memberImg} src={props.picture} alt='member' />
    }
  }
  return (
    <div className={styles.memberItem}>
      {getPicture()}
      <span className={styles.memberName}>{props.name}</span>
      <span className={styles.memberRole}>{props.role}</span>
    </div>
  )
};

export default Member;
