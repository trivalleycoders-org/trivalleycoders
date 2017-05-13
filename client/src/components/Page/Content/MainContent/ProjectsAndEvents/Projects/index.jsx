// Projects
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../../../store/actions';
import * as selectors from '../../../../../../store/selectors'
import Project from './Project';
import * as style from './style';

const Projects = ({ projects }) => (
  <div id='projects' style={style.wrapper}>
    {projects.map((p) => (
      <Project
        key={p._id}
        ownerName={p.ownerName}
        projectName={p.projectName}
        projectType={p.projectType}
        technologies={p.technologies}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  projects: selectors.getProjects(state),
});

export default connect(mapStateToProps, actionCreators)(Projects);
