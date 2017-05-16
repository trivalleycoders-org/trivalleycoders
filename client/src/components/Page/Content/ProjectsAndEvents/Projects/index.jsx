// Projects
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../../store/actions';
import * as selectors from '../../../../../store/selectors'
import Project from './Project';
import * as style from './style';

class Projects extends Component {
  componentWillMount() {
    this.props.requestReadProjects();
  }

  render() {
    const { readProjectsRequest } = this.props;
    switch (readProjectsRequest.status) {
      case 'success':
        return (
          <div id='projects' style={style.wrapper}>
            {this.state.projects.map((p) => (
              <Project
                key={p._id}
                ownerName={p.ownerName}
                projectName={p.projectName}
                projectType={p.projectType}
                technologies={p.technologies}
              />
            ))}
          </div>
        )
      case 'failure':
        return (
          <div id='events' style={style.wrapper}>
            <h2>Attempt to load failed</h2>
          </div>
        );
      default:
        return (
          <div id='events' style={style.wrapper}>
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

const mapStateToProps = (state) => ({
  readProjectsRequest: selectors.getRequest(state, 'readProjects'),
  projects: selectors.getProjects(state),
});

export default connect(mapStateToProps, actionCreators)(Projects);
