import React from 'react';
import './SidebarLink.css';

interface Props {
  id: number;
  url: string;
  children?: React.ReactNode;
  onClick(id: Number): void;
}

export default function SidebarLink(props: Props) {
  const { id, url, children, onClick } = props;

  return (
    <div className="SidebarLink" onClick={() => id}>
      <a href={url}>{children}</a>
    </div>
  )
}
