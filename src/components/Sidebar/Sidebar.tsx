import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { isEmpty, isEqual } from 'lodash';
import store from '../../ts/store/store';
import getProjects from '../../ts/actions/getProjects';
import { ProjectDetails } from '../../ts/types/types';
import Link from '../Link/Link';

import './Sidebar.css';
import { linkSync } from 'fs';

interface Props {
  payload: any[]
}

class Sidebar extends React.Component<Props, never> {
  componentDidMount() {
    axios.get('https://api.github.com/users/facebook/repos')
    .then(response => store.dispatch(getProjects(response.data)))
  }

  renderLinks = () => {
    const { payload } = this.props;
    let links;

    if (!isEmpty(payload)) {
      links = payload.map(projectData => {
        return (<Link url="/" key={projectData.id}>{projectData.name}</Link>)
      })
    }

    return links;
  }

  render() { 
    return (
      <aside className="Sidebar" aria-label="Sidebar">
        <h2>List of Projects</h2>
        {this.renderLinks()}
      </aside>
    )
  }
}

function mapStateToProps(state: ProjectDetails) {
  const { payload } = state;

  return { payload }
};

export default connect(mapStateToProps)(Sidebar);
