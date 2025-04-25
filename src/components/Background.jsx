function Background() {

    const handleClick = (label) => {
      alert(`You clicked: ${label}`);
    };
  
    return (
      <>
        <img src="images/bookshelf.PNG" className="sideImage rightSideImage" alt="right"/>
        <img src="images/desk.PNG" className="sideImage leftSideImage" alt="left" />
  
        {/* Hover Buttons */}
          {/* Resume */}
  
  
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
  
  export default Background
  