import React from 'react';
import '../App';
import resumeFile from '../assets/data/Resume.pdf';
import resumePhoto from '../assets/images/Resume.png';

function Resume(props) {
  // Link to our resume
  return (
    <div id="resumediv">
      <a href={resumeFile} download={resumeFile}>
        <button>Download</button>
      </a>
      <img src={resumePhoto} alt="ResumePhoto"></img>
    </div>
  );
}

export default Resume;
