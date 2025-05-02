import React, {useState} from 'react'
import { useDraggable } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import styles from './WindowStyle.module.css';


export default function Window(props){

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.windowName, // ID must be unique!
      });


      var WindowHeight = '500px';
      var WindowWidth = '800px';


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

    const projectsGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        padding: '1rem',
        width: '100%',
        alignItems: 'center',
        overflowY: 'scroll',

    }

    const projectCardStyle = {

    }


    const handleClick = () => {
        props.removeComponent(props.windowName);
    }

    return(
        <div ref={setNodeRef} className={styles.WindowStyle} style={WindowMod} onMouseDown={() => props.bringToFront(props.windowName)}>
            <div  className={styles.WindowGrabberStyle} {...listeners} {...attributes}></div>
            <button className={styles.ButtonStyle} onClick={handleClick}>X</button>
            <div className={styles.WindowContentsStyle}>

                <div style={projectsGridStyle}>
                    <img src={"./icons/folder-w.png"} style={{width: '100px', margin: 'auto'}}></img>
                    <img src={"./icons/folder.png"} style={{width: '100px', margin: 'auto'}}></img>
                    <img src={"./icons/folder.png"} style={{width: '100px', margin: 'auto'}}></img>
                    <img src={"./icons/folder.png"} style={{width: '100px', margin: 'auto'}}></img>
                    <img src={"./icons/folder.png"} style={{width: '100px', margin: 'auto'}}></img>
                    <img src={"./icons/folder.png"} style={{width: '100px', margin: 'auto'}}></img>
                    <img src={"./icons/folder.png"} style={{width: '100px', margin: 'auto'}}></img>
                    <img src={"./icons/folder.png"} style={{width: '100px', margin: 'auto'}}></img>
                    <img src={"./icons/folder.png"} style={{width: '100px', margin: 'auto'}}></img>
                    <img src={"./icons/folder.png"} style={{width: '100px', margin: 'auto'}}></img>
                </div>

                
            </div>
        </div>
    );
}