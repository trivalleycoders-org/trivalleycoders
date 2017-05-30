// Projects
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import Project from './Project';
import { Grid, Row } from 'react-bootstrap';
import './style.css';

class Projects extends Component {
  componentWillMount() {
    this.props.requestReadProjects();
  }

  render() {
    const { readProjectsRequest } = this.props;
    switch (readProjectsRequest.status) {
      case 'success':
        return (
          <section id='projects' >
            <Grid className='outer-grid'>
              <Row className='main-row'>
                <h1 className='section-title'>Projects</h1>
                <div className='projects'>
                  {this.props.projects.map((p) => (
                    <Project
                      key={p._id}
                      projectName={p.projectName}
                      ownerName={p.ownerName}
                      projectType={p.projectType}
                      technologies={p.technologies}
                    />
                  ))}
                </div>
              </Row>
            </Grid>
          </section>
        )
      case 'failure':
        return (
          <section id='projects'>
            <Grid className='outer-grid'>
              <Row className='main-row'>
                <h2>Attempt to get projects failed</h2>
              </Row>
            </Grid>
          </section>
        );
      default:
        return (
          <section id='projects'>
            <Grid className='outer-grid'>
              <Row className='main-row'>
                <h2>Loading data...</h2>
              </Row>
            </Grid>
          </section>
        );
    }
  }
}

Projects.propTypes = {
  requestReadProjects: PropTypes.func.isRequired,
  readProjectsRequest: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    readProjectsRequest: selectors.getRequest(state, 'readProjects'),
    projects: selectors.getProjects(state),
  }
};

export default connect(mapStateToProps, actionCreators)(Projects);
