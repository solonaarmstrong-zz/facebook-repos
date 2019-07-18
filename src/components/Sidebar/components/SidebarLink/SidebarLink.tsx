import React from 'react';
import './SidebarLink.css';

interface Props {
  url: string;
  children?: React.ReactNode;
}

export default function SidebarLink(props: Props) {
  const { url, children } = props;

  return (
    <div className="SidebarLink">
      <a href={url}>{children}</a>
    </div>
  )
}
