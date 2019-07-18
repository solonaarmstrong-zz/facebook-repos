import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { find, isEqual, isEmpty } from 'lodash';
import store from '../../ts/store/store';
import getContributors from '../../ts/actions/getContributors';
import { ActiveProject, ProjectDetails, Contributors } from '../../ts/types/types';
import Link from '../Link/Link';
import ContributorDescription from './components/ContributorDescription/ContributorDescription';

import './Section.css';
import { linkSync } from 'fs';

interface Props {
  id?: ActiveProject,
  payload?: any[]
  contributors?: any[]
}

class Section extends React.Component<Props, never> {
  componentDidUpdate(prevProps: Props) {
    if (isEqual(prevProps, this.props)) return;

    const { id, payload } = this.props;   
    const activeProject: any = find(payload, [ 'id', id ]);
    
    if (activeProject) {
      const { contributors_url } = activeProject;

      axios.get(contributors_url)
      .then(response => store.dispatch(getContributors(response.data)))
    }
  }

  renderMarkup = () => {
    const { id, payload } = this.props;   
    const activeProject: any = find(payload, [ 'id', id ]);
    let markup;

    if (activeProject) {
      const { name, description, url, contributors_url } = activeProject;
      markup = (
        <>
          <h2>{name}</h2>
          <p>{description}</p>
          <Link url={`${url}`} target="_blank">View the project on GitHub</Link>
          <hr className="Section-BigDivider" />
          <h3>Contributors</h3>
          {this.renderContributorDescriptionMarkup()}
        </>
      );
    } else {
      markup =  (
        <>
          <p>No active project.</p>
          <p>Click on a project to see its details.</p>
        </>
      );
    }

    return markup;
  }

  renderContributorDescriptionMarkup = () => {
    const { contributors } = this.props;
    let markup;
 
    if (contributors) {
      if (contributors.length) {
        markup = contributors.map(contributor => {
          const { id, avatar_url, login, html_url, contributions } = contributor;
          
          return (
            <div key={id}>
              <ContributorDescription
                avatarURL={avatar_url}
                login={login}
                htmlURL={html_url}
                contributions={contributions}
              />
              <hr />
            </div>
          )
        })
      }
    }

    return markup;
  }

  render() {
    return (
      <section className="Section">
        {this.renderMarkup()}
      </section>
    )
  }
}

function mapStateToProps(state: {id: ActiveProject, payload: any[], contributors: any[]}) {
  const { id, payload, contributors } = state;

  return { id, payload, contributors }
};

export default connect(mapStateToProps)(Section);
