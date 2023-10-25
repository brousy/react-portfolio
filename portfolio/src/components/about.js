import React from 'react';
import MickeysHeadshot from '../images/Mickey_Full.jpeg';

function About() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
                {/* TODO replace headshot */}
<img src={MickeysHeadshot} alt="Brous headshot" className="img-fluid" />
            </div>
            <div className="col-md-9"></div>
            {/* left hand side is about me right is headshot */}
           <div>
            <p>
            Brou's about me
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;