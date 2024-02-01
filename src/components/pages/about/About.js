import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class About extends Component {
  render() {
    
    
    return (
      
      <div>
        <div className="card z-depth-0 hide-on-med-and-down pt">
          <div className="card-content social">
            <h2 className="grey-text text-darken-3">
              <strong>GIANG MINH HAU</strong>
            </h2>
            <h5 className="grey-text text-darken-1">Full Stack Wed Developer</h5>
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-square fa-2x"></i>
            </Link>

            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter-square fa-2x"></i>
            </Link>

            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram-square fa-2x"></i>
            </Link>

            <Link to="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github-square fa-2x"></i>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
