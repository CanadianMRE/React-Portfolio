import React from 'react';
import GithubLogo from '../assets/images/GithubIcon.png';
import LinkedInIcon from '../assets/images/LinkedInIcon.png';
import StackOverflowIcon from '../assets/images/StackOverflowIcon.png';
import '../App';

const GithubLink = 'https://gist.github.com/CanadianMRE';
const LinkedInLink = 'https://www.linkedin.com/in/jaymen-laton-a158501ba/';
const StackOverflowLink =
  'https://stackoverflow.com/users/20535239/canadianmre';

function Footer(props) {
  return (
    <footer>
      <ul className="plinks">
        <li>
          <a href={GithubLink} target="_blank" rel="noreferrer">
            <img src={GithubLogo} className="smallimg" alt="GithubIcon" />
          </a>
        </li>
        <li>
          <a href={LinkedInLink} target="_blank" rel="noreferrer">
            <img src={LinkedInIcon} className="smallimg" alt="LinkedInIcon" />
          </a>
        </li>
        <li>
          <a href={StackOverflowLink} target="_blank" rel="noreferrer">
            <img
              src={StackOverflowIcon}
              className="smallimg"
              alt="StackOverflowIcon"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
