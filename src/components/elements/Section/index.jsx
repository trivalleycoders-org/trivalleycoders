// Section
import React from 'react'
import styles from './style.css'
import SectionTitle from './SectionTitle'
import SectionSubTitle from './SectionSubTitle'

const Section = (props) => {
  return (
    <div className={styles.wrapper}>

      <SectionTitle colorName={props.green ? 'green' : ''}>
        {props.title}
      </SectionTitle>
      <SectionSubTitle>
        {props.subTitle}
      </SectionSubTitle>

      {props.children}
    </div>
  )
}

export default Section
