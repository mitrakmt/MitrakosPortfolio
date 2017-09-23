import React, { Component } from 'react';
import $ from 'jquery';
import background from '../background.jpg';
import Landing from './landing/landing';
import Projects from './projects/projects';
import Contact from './contact/contact';
import Skills from './skills/skills';
import Education from './education/education';
import './home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    $(".landingContainer-discover").click(function() {
      $('html, body').animate({
          scrollTop: $(".projectsContainer").offset().top
      }, 1000);
  });
  }

  render() {
    const backgroundStyle = {
      backgroundImage: 'url(' + {background} + ')',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      width: '100vw'
    }

    return (
      <div className="homeContainer">
        <Landing />
        <div className="homeContainer-lineCenter" />
        <Projects />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default Home;