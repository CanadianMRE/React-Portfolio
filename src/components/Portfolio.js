import React from 'react';
import '../App';
import portfolios from '../assets/data/portfolios.json';
import noImageFound from '../assets/images/NoImageFound.jpg';

import DevQuiz from '../assets/images/DevQuiz.png';
import GoogleLookup from '../assets/images/GoogleLookup.png';
import NoteTaker from '../assets/images/NoteTaker.png';
import WeatherViewer from '../assets/images/WeatherViewer.png';
import Yourstore from '../assets/images/Yourstore.png';
import PortfolioImg from '../assets/images/Portfolio.png';

const getImage = (imagename) => {
  switch (imagename) {
    case 'GoogleLookup':
      return GoogleLookup;
    case 'DevQuiz':
      return DevQuiz;
    case 'NoteTaker':
      return NoteTaker;
    case 'WeatherViewer':
      return WeatherViewer;
    case 'Yourstore':
      return Yourstore;
    case 'Portfolio':
      return PortfolioImg;
    default:
      return noImageFound;
  }
};

function Portfolio(props) {
  var portfolioList = portfolios.map(function (portfolio, index) {
    const divStyle = {
      backgroundImage: `url(${getImage(portfolio.img)})`,
    };
    return (
      <div key={index}>
        <div style={divStyle} className="portfoliocard">
          <a
            className="carddeployedlink cardlink"
            href={portfolio.link}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <p>Deployed application</p>
            </div>
          </a>
          <a
            className="cardgitlink cardlink"
            href={portfolio.github}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <p>Github Page</p>
            </div>
          </a>
        </div>
      </div>
    );
  });

  return <div id="portfoliodiv">{portfolioList}</div>;
}

export default Portfolio;
