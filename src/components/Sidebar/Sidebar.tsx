import React from 'react';
import axios from 'axios';
import store from '../../ts/store/store';
import getProjects from '../../ts/actions/getProjects';
import Link from '../Link/Link';

import './Sidebar.css';

export default class Sidebar extends React.Component {
  componentDidMount() {
    axios.get('https://api.github.com/users/facebook/repos')
    .then(response => store.dispatch(getProjects(response)))
  }

  renderLinks = () => {
    return (
      <Link url="test">test</Link>
    )
  }

  render() {
    return (
      <aside className="Sidebar">
        {this.renderLinks()}
      </aside>
    )
  }
}
