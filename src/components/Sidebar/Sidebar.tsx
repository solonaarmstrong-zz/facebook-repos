import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import store from '../../ts/store/store';
import getProjects from '../../ts/actions/getProjects';
import setActiveProject from '../../ts/actions/setActiveProject';
import { ProjectDetails } from '../../ts/types/types';
import SidebarLink from './components/SidebarLink/SidebarLink';

import './Sidebar.css';

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
        return (
          <SidebarLink
            key={projectData.id}
            id={projectData.id}
            url="/"
            onClick={this.onClickSidebarLink}
          >
            {projectData.name}
          </SidebarLink>
        )
      })
    }

    return links;
  }

  onClickSidebarLink = (id: Number) => {
    store.dispatch(setActiveProject(id));
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
