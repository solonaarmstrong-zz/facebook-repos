import React from 'react';
import './Main.css';

interface Props {
  children?: React.ReactNode;
}

export default function Main(props: Props) {
  const { children } = props;

  return (
    <main className="Main">
      {children}
    </main>
  )
}
