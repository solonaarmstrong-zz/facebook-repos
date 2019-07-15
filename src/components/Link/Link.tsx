import React from 'react';

interface Props {
  url: string;
  children: React.ReactNode;
}

export default function Link(props: Props) {
  const { url, children } = props;

  return <a href={url}>{children}</a>;
}