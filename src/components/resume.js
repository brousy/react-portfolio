function Resume() {
    return (
      <div className="container">
        <div className="card mt-4">
          <div className="card-header">
            <h2>Skills</h2>
          </div>
          <div className="card-body">
            <h5> Technical Skills</h5> <p>
              HTML/CSS, JavaScript, Bootstrap, DOM Manipulation, APIs, jQuery, JSON, Git, Node.js, OOP, Express.js,
              MySQL, MVC Paradigm, Sequelize, Testing, React.js, NoSQL
            </p>
            <h5>Applications</h5>
            <p> SharePoint Online (O365), GitHub/GitLab, Square,Meez, Dropbox, Google Suite, Excel & More!
            </p>
          </div>
        </div>
        <div className="card mt-4">
        <div className="card-header">
          <h2>Experience</h2>
        </div>
        <div className="card-body">
          <h5>General Manager</h5>
          <p className="experience-info">
           Castellinos | Philadelphia | May 2021 – Present
          </p>
          <h5>General Manager</h5>
          <p className="experience-info">
            Hip City Veg | Philadelphia | May 2022 - May 2023
          </p>
          <h5>Culinary Director</h5>
          <p className="experience-info">
            Hi-Lo Taco Co. | Philadelphia | March 2021 – May 2022
          </p>
          <h5>Sous Chef</h5>
          <p className="experience-info">
            Nopa | San Francisco | May 2017 – June 2019
          </p>
      </div>
<div className="card mt-4">
        <div className="card-header">
          <h2>Education</h2>
        </div>
        <div className="card-body">
          <ul>
            <li>Penn LPS Coding Boot Camp, University Of Pennsylvania</li>
            <li>B.S. Positive Psychology and Organizational Anthropology, University of Pennsylvania</li>
            <li>Associates in Culinary Arts, Culinary Institute of America</li>
          </ul>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-header">
          <h2>Certifications</h2>
        </div>
        <div className="card-body">
          <ul>
            <li>Full Stack Web Developer - University of Pennsylvania</li>
        
          </ul>
        </div>
      </div>

      {/* <div className="resumeDownload">
        <a href="/images/Resume.pdf" download>Download Resume Here</a>
      </div> */}
    </div>
    </div>
  );
  }

export default Resume;