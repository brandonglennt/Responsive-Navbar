/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import './style.css';
import './styleM.css';

import Navbar from 'components/Navbar';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <Navbar/>

      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
