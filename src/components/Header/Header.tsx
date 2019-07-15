import React from 'react';
import Link from '../Link/Link';
import './Header.css';

export default function Header() {
  return (
    <header className="Header">
      <p className="Header-name">
        <Link url="http://www.solonaarmstrong.com">Solona</Link>
      </p>
      <p>Facebook projects on GitHub</p>
    </header>
  )
}
