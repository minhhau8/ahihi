import React, { Component } from 'react';
import ImgProfile from "../../images/12055105.jpg";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="avatarImg">
          <img className="circle responsive-img"
            src={ImgProfile}
            alt="Minh Hau" />
        </div>
        <div className="card light-blue darken-4 z-depth-0 hide-on-large-only">
          <div className="card-content center social">
            <h2 className="grey-tect text-lighten-3">
              <strong>Giang Minh Hau</strong>
            </h2>
            <h5 className="grey-text text-lighten-1">Full Stack Wed Developer</h5>
            <a href="https://facebook.com" target="_blank">
              <i className="fab fa-facebook-square fa-2x"></i>
            </a>

            <a href="https://twitter.com" target="_blank">
              <i className="fab fa-twitter-square fa-2x"></i>
            </a>

            <a href="https://linkedin.com" target="_blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>

            <a href="https://github.com" target="_blank">
              <i className="fab fa-github-square fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="" card light-blue darken-4 z-depth-0>
          <div className="card-content">
            <h6 className="white-text">
              <strong># PROFILE</strong>
            </h6>
            <hr />
            <p className="grey-text text-lighten-3 pt">
              I am a programmer with 2 years of experience. I can design a website, an application, and more...
              My wish when writing this CV is that I can apply for a position in my major.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
