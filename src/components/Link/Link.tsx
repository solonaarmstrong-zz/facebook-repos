import React from 'react';
import './Link.css';

interface Props {
  url: string;
  target?: string; 
  children?: React.ReactNode;
}

export default function Link(props: Props) {
  const { url, target = '_self', children } = props;

  return <a href={url} target={target}>{children}</a>;
}
