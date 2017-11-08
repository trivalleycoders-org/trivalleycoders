// Section
import React from 'react'
import styles from './style.css'
import SectionTitle from './SectionTitle'
import SectionSubTitle from './SectionSubTitle'
// import classNames from 'classNames'

const Section = (props) => {

  return (
    <div className={styles.wrapper} id={props.id}>
      <div className={styles.titles}>
        <div className={styles.title}>
          <SectionTitle fontColor={props.color}>
            {props.title}
          </SectionTitle>
        </div>
        <div className={styles.subTitle}>
          <SectionSubTitle>
            {props.subTitle}
          </SectionSubTitle>
        </div>
      </div>
      <div className={styles.children}>
        {props.children}
      </div>
    </div>

  )
}

export default Section
