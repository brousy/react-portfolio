import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Project from './project';

function Portfolio() {
  const projects = [
    {
      // image: require('../images/the19thHole.png'),
      title: 'The 19th Hole',
      description: "The 19th Hole is a web application that caters to golf enthusiasts and liquor lovers by providing a seamless solution for finding golf courses and liquor stores based on the user's zip code. With an intuitive interface, users can quickly access the top golf courses and nearby liquor distributors, saving them time and effort. The project meets the requirements of using a CSS framework other than Bootstrap, being deployed to GitHub Pages, incorporating server-side APIs, utilizing client-side storage, ensuring a responsive design, and maintaining a polished user interface.",
      link: 'https://github.com/mcamarco/the-19th-hole',
      deployedLink: 'https://mcamarco.github.io/the-19th-hole/',
      id: 1
    },
    // create another array for projects 2-6
    {
        // image: require('../images/svgLogoMaker.png'),
        title: 'SVG Logo Maker',
        description: "SVG Logo Maker is a Node.js command-line application that empowers freelance web developers to create custom logos for their projects. The application prompts users to enter text, choose a color and shape, and generates an SVG file representing the logo. With SVG Logo Maker, developers can quickly and affordably generate professional logos without the need for a graphic designer. The application utilizes Inquirer for user input and Jest for unit testing, providing a seamless and efficient logo creation experience.",
        link: 'https://github.com/mcamarco/SVG_Logo_Maker',
        // deployedLink: '',
        id: 6
      }
    ];
  
    return (
    <div className="container">
      <div className="row cardDiv">
        {projects.map((project) => (
          <div className="col-md-4 mb-4 col-sm-12" key={project.id}>
            <Project
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              deployedLink={project.deployedLink}
              id={project.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
