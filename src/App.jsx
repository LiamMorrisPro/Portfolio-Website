import React, { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import { restrictToWindowEdges } from '@dnd-kit/modifiers';

import './App.css'
import DesktopGrid from './components/DesktopGrid.jsx'
import Footer from './components/Footer.jsx'
import WindowProjects from './components/WindowProjects.jsx'
import WindowGallery from './components/WindowGallery.jsx';
import WindowAbout from './components/WindowAbout.jsx';


function App() {
  const [windows, setWindows] = useState([]);

  const addComponent = (name) => {
    if (!windows.some(w => w.name === name)) {
      setWindows(prev => [...prev, { name, x: 500, y: 100 }]);
    }
  };

  const removeComponent = (name) => {
    setWindows(prev => prev.filter(w => w.name !== name));
  };

  const handleDragEnd = (event) => {
    const { delta, active } = event;
    const id = active.id;

    setWindows(prev =>
      prev.map(w =>
        w.name === id
          ? { ...w, x: w.x + delta.x, y: w.y + delta.y }
          : w
      )
    );
    bringToFront(id);
  };

  const bringToFront = (name) => {
    setWindows(prev => {
      const withoutWindow = prev.filter(w => w.name !== name);
      const windowToBring = prev.find(w => w.name === name);
      if (!windowToBring) return prev;
      return [...withoutWindow, windowToBring];
    });
  };

  return (

    <>
        <DndContext modifiers={[restrictToWindowEdges]} onDragEnd={handleDragEnd}>
        {windows.map((window, index) => {
          const zIndex = 10 + index;
          if (window.name === "Projects") {
            return (
              <WindowProjects
                key={window.name}
                position={{ x: window.x, y: window.y }}
                windowName={window.name}
                removeComponent={removeComponent}
                zIndex={zIndex}
                bringToFront={bringToFront}
              />
            );
          } else if (window.name === "Gallery") {
            return (
              <WindowGallery
                key={window.name}
                position={{ x: window.x, y: window.y }}
                windowName={window.name}
                removeComponent={removeComponent}
                zIndex={zIndex}
                bringToFront={bringToFront}
              />
            );
          } else if (window.name === "About") {
            return (
              <WindowAbout
                key={window.name}
                position={{ x: window.x, y: window.y }}
                windowName={window.name}
                removeComponent={removeComponent}
                zIndex={zIndex}
                bringToFront={bringToFront}
              />
            );
          } else {
            return null;
          }
        })}
        </DndContext>
      
      
      <div className='app'> 
        <DesktopGrid addComponent={addComponent}/>
        <Footer/>        
      </div>
      
      
    </>

  );
}

export default App
