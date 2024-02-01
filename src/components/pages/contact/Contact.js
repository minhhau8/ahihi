import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong># CONTACT</strong>
            </h6>
            <hr />
            <p className="grey-text text-lighten-3 pt">
              123 Ngo Chi Quoc, Binh Chieu, Tp Thu Duc
            </p>
            <p className="grey-text text-lighten-3 pt">
              Phone: 0123 456 789
              <br />
              Email: Email@gmail.com
              < br />
              Wedsite: www.google.com
            </p>
          </div>
        </div>
      </div>
    )
  }
}
