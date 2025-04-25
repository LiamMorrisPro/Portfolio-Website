import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Hover() {
  const [hovered, setHovered] = React.useState(true);
  return (
    <>
      <img
        src="ResumeHover.PNG"
        alt="icon Johnson"
          style={{
            position: 'absolute',
            height: '23vh',
            top: '24vh',
            right: '1vh',          
            zIndex: 10,
            opacity: hovered ? 1 : 0,
            pointerEvents: 'none',
          }}
      />
      <svg
      className="sideSvg"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid meet">
      
      <rect
      x="1710"
      y="280"
      width="160"
      height="200"
      fill="rgba(255, 0, 0, 0.3)"
      stroke="red"
      strokeWidth="2"
      
      onClick={() => window.open('Liam Morris Resume.pdf', '_blank')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{position: 'absolute', cursor: 'pointer', zIndex: 11 }}
      />
    </svg> 

    </>

  );
}

function HoverImage({imagePath},{linkPath}){
  const [hovered, setHovered] = useState(false);
  return(
  <>
    <img
        src="ResumeHover.PNG"
        style={{
          position: 'absolute',
          height: '23vh',
          top: '24vh',
          right: 0,          
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: 10,

        }}
    />
    <svg
      className="sideSvg"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid meet">
      {/* Resume */}
      <rect
      x="1710"
      y="280"
      width="160"
      height="200"
      fill="transparent"
      stroke="red"
      strokeWidth="2"
      
      onClick={() => window.open('Liam Morris Resume.pdf', '_blank')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
      />
    </svg>       
  </>
  );
}




function App() {

  const handleClick = (label) => {
    alert(`You clicked: ${label}`);
  };

  return (
    <>
      <img src="bookshelf.PNG" className="sideImage rightSideImage" alt="right" />
      <img src="desk.PNG" className="sideImage leftSideImage" alt="left" />

      {/* Hover Buttons */}
        {/* Resume */}
        <Hover/>

      <svg
      className="sideSvg"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid meet">

         {/* Project-1 */}
        <rect
        x="1140"
        y="460"
        width="80"
        height="220"
        fill="transparent"
        stroke="red"
        strokeWidth="2"
        onClick={() => handleClick("Region 1")}
        style={{ cursor: 'pointer' }}
        />

        {/* Project-2 */}
        <rect
        x="1225"
        y="520"
        width="60"
        height="160"
        fill="transparent"
        stroke="blue"
        strokeWidth="2"
        onClick={() => handleClick("Region 2")}
        style={{ cursor: 'pointer' }}
        />

        {/* Project-3 */}
        <rect
        x="1330"
        y="520"
        width="40"
        height="150"
        fill="transparent"
        stroke="green"
        strokeWidth="2"
        transform="rotate(-35 1350 600)" // rotate 45 degrees around the rect's center
        onClick={() => handleClick("Region 3")}
        style={{ cursor: 'pointer' }}
        />

        {/* Links */}
        <circle
        cx="1320"
        cy="150"
        r="130"
        fill="transparent"
        stroke="blue"
        strokeWidth="2"
        onClick={() => handleClick("Region 3")}
        onMouseEnter={() => console.log("Mouse Entered")}
        onMouseLeave={() => console.log("Mouse Exited")}
        style={{ cursor: 'pointer' }}
        />
      </svg>  

  
    </>
  );
}

export default App
