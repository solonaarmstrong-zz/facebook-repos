import React from 'react';
import './Link.css';

interface Props {
  url: string;
  children?: React.ReactNode;
}

export default function Link(props: Props) {
  const { url, children } = props;

  return (
    <div className="Link">
      <a href={url}>{children}</a>
    </div>
  )
}
