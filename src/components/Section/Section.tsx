import React from 'react';
import './Section.css';

interface Props {
  children?: React.ReactNode;
}

export default function Section(props: Props) {
  const { children } = props;

  return (
    <section className="Section">
      {children}
    </section>
  )
}
