import React from 'react';
import Link from '../Link/Link';

import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="Sidebar">
      {renderLinks()}
    </aside>
  )
}

function renderLinks() {
  return (
    <Link url="test">test</Link>
  )
}
