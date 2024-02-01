import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>
        <div classname="card z-depth-o"> 
        <div className="card-content">
          <h6>
            <strong><i class="fas fa-graduation-cap"></i> EDUCATION </strong>
            </h6>
            <hr /> 
            <div className="row mt">
              <div className="col s12"> 
              <blockquote>
                <h6 className="no-pad mt-bottom">
                  <strong> ISPACE College</strong>
                  <span> 2022-2025</span>
                  </h6>
                  <p> 
                  I start studying here at the end of 2022. I learn many things from the instructors at this school.
                   They are lecturers with extensive experience in many fields.
                  </p>
                  </blockquote>
                </div>
            </div>
                   </div>
        </div>
      </div>
    )
  }
}
