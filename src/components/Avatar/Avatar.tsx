import React from 'react';
import './Avatar.css';

interface Props {
  src: string;
  alt: string;
}

export default function Avatar(props: Props) {
  const { src, alt } = props;

  return <img className="Avatar" src={src} alt={alt} />;
}
