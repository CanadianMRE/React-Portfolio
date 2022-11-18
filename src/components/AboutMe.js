import React from 'react';
import '../App';
import Pfp from '../assets/images/pfp.png';

function AboutMe(props) {
  return (
    <div id="aboutmediv">
      <img src={Pfp} alt="ProfilePicture"></img>
      <p>
        I am a full-stack web developer with experience in React, Express and
        various other web development tools. I live in Toronto, ON and am
        currently taking a Full Stack Web Dev course at UofT Continued Studies.
      </p>
    </div>
  );
}

export default AboutMe;
