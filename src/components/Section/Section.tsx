import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import { ActiveProject, ProjectDetails } from '../../ts/types/types';
import Link from '../Link/Link';

import './Section.css';

interface Props {
  id?: ActiveProject,
  payload?: ProjectDetails
}

class Section extends React.Component<Props, never> {
  renderMarkup = () => {
    const { id, payload } = this.props;   
    const activeProject: any = find(payload, [ 'id', id ]);
    let name;
    let description;
    let url;

    if (activeProject) {
      console.log('yes');
      name = activeProject.name;
      description = activeProject.description;
      url = activeProject.html_url;

      return (
        <>
          <h2>{name}</h2>
          <p>{description}</p>
          <Link url={`${url}`} target="_blank">View the project on GitHub</Link>
          <hr />
          <h3>Contributors</h3>
        </>
      )
    } else {
      return (
        <>
          <p>No active project.</p>
          <p>Click on a project to see its details.</p>
        </>
      );
    }
  }

  render() {
    return (
      <section className="Section">
        {this.renderMarkup()}
      </section>
    )
  }
}

function mapStateToProps(state: {id: ActiveProject, payload: ProjectDetails}) {
  const { id, payload } = state;

  return { id, payload }
};

export default connect(mapStateToProps)(Section);
