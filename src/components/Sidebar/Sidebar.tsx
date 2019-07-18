import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { isEmpty, sortBy, reverse } from 'lodash';
import store from '../../ts/store/store';
import getProjects from '../../ts/actions/getProjects';
import { ProjectDetails } from '../../ts/types/types';
import SidebarLink from './components/SidebarLink/SidebarLink';

import './Sidebar.css';

const GITHUB_FACEBOOK_URL = 'https://api.github.com/users/facebook/repos';

interface Props {
  payload: any[]
}

class Sidebar extends React.Component<Props, never> {
  componentDidMount() {
    axios.get(GITHUB_FACEBOOK_URL)
    .then(response => store.dispatch(getProjects(response.data)))
  }

  renderLinks = () => {
    const { payload } = this.props;
    let links;

    if (!isEmpty(payload)) {
      const sortedPayload = sortBy(payload, ['watchers']);

      links = reverse(sortedPayload).map(projectData => {
        return (
          <SidebarLink
            key={projectData.id}
            id={projectData.id}
            url="/"
          >
            {projectData.name}
          </SidebarLink>
        )
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
