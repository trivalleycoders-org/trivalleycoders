// TechLogo

import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import * as style from './style.css';

const TechLogo = (props) => {
  const logoStyle = props.shape === 'square' ? style.logoSquare : style.logoRectangle;
  return (
    <Grid>
      <Row>
        <Thumbnail href="http://klequis.com" src={props.url} alt="logo">
          <h4>{props.name}</h4>
        </Thumbnail>
      </Row>
    </Grid>
  )
};

export default TechLogo;
