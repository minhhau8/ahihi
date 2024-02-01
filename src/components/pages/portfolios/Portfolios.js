import React, { Component } from 'react'

export default class Portfolios extends Component {
  render() {
    return (
      <div>
        <div classname="card z-depth-o"> 
        <div className="card-content">
          <h6>
            <strong><i class="fas fa-graduation-cap"></i> PORTFOLIOS </strong>
            </h6>
            <hr /> 
            <div className="row mt">
              <div className="col s12"> 
              <blockquote>
                <h6 className="no-pad mt-bottom">
                  <strong> Bookstore management web form design project</strong>
                  <span> 2022</span>
                  </h6>
                  </blockquote>
                </div>
            </div>

            <div className="row mt">
              <div className="col s12"> 
              <blockquote>
                <h6 className="no-pad mt-bottom">
                  <strong> Restaurant management web form design project</strong>
                  <span> 2022</span>
                  </h6>
                  </blockquote>
                </div>
            </div>

            <div className="row mt">
              <div className="col s12"> 
              <blockquote>
                <h6 className="no-pad mt-bottom">
                  <strong> Hotel management web form design project</strong>
                  <span> 2023</span>
                  </h6>
                  </blockquote>
                </div>
            </div> 

            <div className="row mt">
              <div className="col s12"> 
              <blockquote>
                <h6 className="no-pad mt-bottom">
                  <strong> CV design using react</strong>
                  <span> 2024</span>
                  </h6>
                  </blockquote>
                </div>
            </div> 

            
                   </div>
        </div>
      </div>
    )
  }
}

