import React from 'react';
import setActiveProject from '../../../../ts/actions/setActiveProject';
import store from '../../../../ts/store/store';

import './SidebarLink.css';

interface Props {
  id: number;
  url: string;
  children?: React.ReactNode;
}

export default class SidebarLink extends React.Component<Props, never> {
  handleClick = (event: React.MouseEvent) => {
    const { id } = this.props;

    event.preventDefault();
    store.dispatch(setActiveProject(id));
  }

  render() {
    const { url, children } = this.props;

    return (
      <div className="SidebarLink" onClick={this.handleClick}>
        <a href={url}>{children}</a>
      </div>
    )
  }
}
