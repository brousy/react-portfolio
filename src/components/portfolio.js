import React from 'react';

import Project from './project';

function Portfolio() {
  const projects = [
    {
      // image: require('../images/the19thHole.png'),
      title: 'Professional Portfolio',
      description: "This is an application for my portfolio of deployed apps I have created during the BootCamp.",
      link: 'https://github.com/brousy/Brou-portfolio-new',
      deployedLink: 'https://brousy.github.io/Brou-portfolio-new/',
      id: 1
    },
    {
        // image: require('../images/svgLogoMaker.png'),
        title: 'Weather Dashboard',
        description: "GIVEN a weather dashboard with form inputs WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history WHEN I view current weather conditions for that city THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed WHEN I view future weather conditions for that city THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity WHEN I click on a city in the search history THEN I am again presented with current and future conditions for that city.",
        link: 'https://github.com/brousy/weather-dashboard',
        deployedLink: 'https://brousy.github.io/weather-dashboard/',
        id: 2
      },
      {
        // image: require('../images/svgLogoMaker.png'),
        title: 'SVG Logo Maker',
        description: "SVG Logo Maker is a Node.js command-line application that empowers freelance web developers to create custom logos for their projects. The application prompts users to enter text, choose a color and shape, and generates an SVG file representing the logo. With SVG Logo Maker, developers can quickly and affordably generate professional logos without the need for a graphic designer. The application utilizes Inquirer for user input and Jest for unit testing, providing a seamless and efficient logo creation experience.",
        link: 'https://github.com/brousy/object-oriented-programming',
        deployedLink: '',
        id: 3
      },
      {
        // image: require('../images/svgLogoMaker.png'),
        title: 'SVG Logo Maker',
        description: "SVG Logo Maker is a Node.js command-line application that empowers freelance web developers to create custom logos for their projects. The application prompts users to enter text, choose a color and shape, and generates an SVG file representing the logo. With SVG Logo Maker, developers can quickly and affordably generate professional logos without the need for a graphic designer. The application utilizes Inquirer for user input and Jest for unit testing, providing a seamless and efficient logo creation experience.",
        link: 'https://github.com/brousy/object-oriented-programming',
        deployedLink: '',
        id: 4
      },
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
