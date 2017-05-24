// Projects
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap'
import * as actionCreators from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import Project from './Project';
import { Grid } from 'react-bootstrap';
import * as style from './style.css';

class Projects extends Component {
  componentWillMount() {
    this.props.requestReadProjects();
  }

  render() {
    const { readProjectsRequest } = this.props;
    switch (readProjectsRequest.status) {
      case 'success':
        return (
          <div className='green-border'>
            <Grid className='projects-grid blue-border'>
              <h1 >Projects</h1>
              <div className='projects-wrapper'>

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
            </Grid>
          </div>
        )
      case 'failure':
        return (
          <div id='projects'>
            <h2>Attempt to get projects failed</h2>
          </div>
        );
      default:
        return (
          <div id='projects'>
            <h2>Loading data...</h2>
          </div>
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
