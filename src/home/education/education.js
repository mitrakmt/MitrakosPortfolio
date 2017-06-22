import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';
import './education.css';

class Education extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="educationContainer">
      
        <div className="educationContainer-timeline">
          <div className="educationContainer-timeline-leftCircle">
            <div className="educationContainer-timeline-leftCircle-filling" />
          </div>
          
          <div className="educationContainer-timeline-middleCircle">
            <div className="educationContainer-timeline-middleCircle-filling" />
          </div>
          
          <div className="educationContainer-timeline-rightCircle">
            <div className="educationContainer-timeline-rightCircle-filling" />
          </div>
          <div className="educationContainer-timeline-meterFill" />
        </div>

      </div>
    );
  }
}

export default Education;