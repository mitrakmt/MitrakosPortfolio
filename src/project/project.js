import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css'
import './project.css';

class Project extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="projectContainer">
        <div className="projectContainer-backButton">
          <Link to={`/`}>
            <FontAwesome
              name='long-arrow-left'
              size='3x'
              style={{ textShadow: 'white' }}
            />
          </Link>
        </div>


      </div>
    );
  }
}

export default Project;
