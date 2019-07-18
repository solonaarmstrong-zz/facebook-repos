import React from 'react';
import Link from '../Link/Link';
import './Header.css';

export default function Header() {
  return (
    <header className="Header">
      <p className="Header-name">
        <Link url="http://www.solonaarmstrong.com" target='_blank'>Solona</Link>
      </p>
      <h1>Facebook projects on GitHub</h1>
    </header>
  )
}
