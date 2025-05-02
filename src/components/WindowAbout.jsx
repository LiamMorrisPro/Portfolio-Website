import React, {useState} from 'react'
import { useDraggable } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import styles from './WindowStyle.module.css';

export default function Window(props){

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.windowName, // ID must be unique!
      });


      var WindowHeight = '600px';
      var WindowWidth = '700px';

    const WindowMod = {
        display: 'inline-grid',
        gridTemplateRows: '50px auto',
        gridTemplateColumns: '1',

        height: WindowHeight,
        width: WindowWidth,
        zIndex: props.zIndex,

        top: props.position.y,
        left: props.position.x,
        transform: CSS.Translate.toString(transform),
    }

    const handleClick = () => {
        props.removeComponent(props.windowName);
    }



    return(
        <div ref={setNodeRef} className={styles.WindowStyle} style={WindowMod} onMouseDown={() => props.bringToFront(props.windowName)}>
            <div  className={styles.WindowGrabberStyle} {...listeners} {...attributes}></div>
            <button className={styles.ButtonStyle} onClick={handleClick}>X</button>
            <div className={styles.WindowContentsStyle} style={{ height: WindowHeight, width: WindowWidth }}>

                <div style={{display: 'flex', flex: '0.3', width: '100%', marginTop: '1rem', marginBottom: '1rem',marginLeft: '5rem', marginRight: '5rem', alignItems: 'center', gap: '1rem'}}>

                    <div style={{display: 'inline-block', width: '25%'}}>
                        <img src={'icon.PNG'} width={'100%'} style={{borderRadius: '50%'}}></img>
                    </div>

                    <div style={{display: 'inline-block'}}>
                        <h1 style={{margin: '0', letterSpacing: '2px', fontSize: '40px'}}>Liam Morris</h1>
                        <text style={{margin: '0'}}>Game Developper/Web Developper</text>
                    </div>
                    
                </div>

                <hr style={{width: '100%'}}></hr>

                <div style={{fontSize: '20px', flex: '0.7' ,overflowY: 'auto', overflowX: 'hidden'}}>
                    <div style={{margin: '3rem'}}>
                        <p>Hi I'm Liam, I am a programmer/artist, and I do...</p>

                        <ul>
                            <li>Technical Art</li>
                            <li>Game Design</li>
                            <li>Front-end Web Development</li>
                        </ul>       



                        <h2 style={{margin: '0', letterSpacing: '2px', fontSize: '30px'}}>Education</h2>    
                        <div style={{ display: 'flex', alignItems: 'stretch', gap: '1rem' }}>
                            <div style={{ width: '5px', backgroundColor: '#333' }}></div>
                            <div>
                                <p style={{margin:'0'}}>Bachelor of Science in Computer Science</p>
                                <p style={{margin:'0', fontSize: '15px'}}>(Graduated 2024, From Bishops University)</p>
                            </div>
                        </div>  
                        <br></br>


                        <h2 style={{margin: '0', letterSpacing: '2px', fontSize: '30px'}}>Other Interests</h2>
                        <ul>
                            <li>3D Modeling</li>
                            <li>Character Design</li>
                            <li>Environment Art</li>
                        </ul>     

                        <h2 style={{margin: '0', letterSpacing: '2px', fontSize: '30px'}}>Language Proficiency</h2>    
                        <div style={{ display: 'flex', alignItems: 'stretch', gap: '1rem' }}>
                            <div style={{ width: '5px', backgroundColor: '#333' }}></div>
                            <div>
                                <p style={{margin:'0'}}>I am fluent in English and French</p>
                                
                            </div>
                        </div>  
                        <br></br>

                    </div>


                </div>




            </div>
        </div>
    );
}