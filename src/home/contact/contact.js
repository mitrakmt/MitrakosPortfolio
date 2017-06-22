import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.css'
import './contact.css';

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    $('.copyEmailToClipboard').on('click', () => {
      this.copyToClipboard('#name');
      $('.copyEmailToClipboard').addClass('emailCopied')
      setTimeout(() => {
        $('.copyEmailToClipboard').removeClass('emailCopied')
      }, 5000)
    }
  )}

  copyToClipboard = (element) => {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

  render() {
    return (
      <div className="contactContainer">
        <div className="contactContainer-header">
          <h5>Contact</h5>
          <div className="copyEmailToClipboard">
            <h4 id="name">mike.mitrakos@gmail.com</h4>
          </div>
          <p>Click to copy email to clipboard</p>
        </div>
        <div className="contactContainer-social">
          <h5>Social</h5>
          <div className="contactContainer-social-list">
            <div>
              <a href="https://www.github.com/mitrakmt" target="_blank">Github</a>
              <div className="social-icon">
                <FontAwesome
                  name='github'
                  size='3x'
                />
              </div>
            </div>
            <div>
              <a href="https://www.angel.co/mike_mitrakos" target="_blank">Angelist</a>
              <div className="social-icon">
                <FontAwesome
                  name='angellist'
                  size='3x'
                />
              </div>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/michaelmitrakos" target="_blank">Linkedin</a>
              <div className="social-icon">
                <FontAwesome
                  name='linkedin'
                  size='3x'
                />
              </div>
            </div>
            <div>
              <a href="https://initjs.org" target="_blank">Medium</a>
              <div className="social-icon">
                <FontAwesome
                  name='medium'
                  size='3x'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
