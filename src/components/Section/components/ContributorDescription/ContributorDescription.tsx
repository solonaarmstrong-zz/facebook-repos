import React from 'react';
import Avatar from '../../../Avatar/Avatar';
import Link from '../../../Link/Link';

import './ContributorDescription.css';

interface Props {
  avatarURL: string,
  login: string,
  htmlURL: string,
  contributions: Number
}

export default function ContributorDescription(props: Props) {
  const { avatarURL, login, htmlURL, contributions } = props;

  return (
    <div className="ContributorDescription">
      <Avatar src={avatarURL} alt={login} />
      <div className="ContributorDescription-Details">
        <div><strong>Login:</strong> {login}</div>
        <div>
          <strong>GitHub link:</strong>
          {' '}
          <Link url={htmlURL} target="_blank">{htmlURL}</Link>
        </div>
        <div><strong>Contributions:</strong> {contributions}</div>
      </div>
    </div>
  )
} 