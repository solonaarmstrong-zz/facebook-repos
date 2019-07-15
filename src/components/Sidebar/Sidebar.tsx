import React from 'react';
import Link from '../Link/Link';

export default class Sidebar extends React.Component<never, never>  {
  renderLinks = () => {
    return (
      <Link url="test">test</Link>
    )
  }

  render() {
    return (
      <aside>
       {this.renderLinks}
      </aside>
    )
  }
}