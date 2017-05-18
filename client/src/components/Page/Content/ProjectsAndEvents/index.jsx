// Projects and Events
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import * as style from './style';
import Projects from './Projects';
import Events from './Events';

const ProjectsAndEvents = () => (
  <div id='page-and-events' style={style.wrapper}>
    <Grid>
      <Row>
        <Col md={6}>
          <Events />
        </Col>
        <Col md={6}>
          <Projects />
        </Col>
      </Row>
    </Grid>


  </div>
);

export default ProjectsAndEvents;
