import React from 'react';
import '../App';
import portfolios from '../assets/data/portfolios.json';
import noImageFound from '../assets/images/NoImageFound.jpg';

function Portfolio(props) {
  var portfolioList = portfolios.map(function (portfolio, index) {
    const divStyle = {
      backgroundImage: `url(${portfolio.img ? portfolio.img : noImageFound})`,
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
