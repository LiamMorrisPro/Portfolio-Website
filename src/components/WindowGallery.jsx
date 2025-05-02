import React, {useState} from 'react'
import { useDraggable } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import styles from './WindowStyle.module.css';

export default function WindowGallery(props){

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.windowName, // ID must be unique!
      });

    const handleClick = () => {
        props.removeComponent(props.windowName);
    }

    const WindowMod = {
        display: 'inline-grid',
        gridTemplateRows: '50px auto',
        gridTemplateColumns: '1',

        height: '700px',
        width: '700px',
        zIndex: props.zIndex,

        top: props.position.y,
        left: props.position.x,
        transform: CSS.Translate.toString(transform),
    }

    return(
        <div ref={setNodeRef} className={styles.WindowStyle} style={WindowMod} onMouseDown={() => props.bringToFront(props.windowName)}>
            <div  className={styles.WindowGrabberStyle} {...listeners} {...attributes}></div>
            <button className={styles.ButtonStyle} onClick={handleClick}>X</button>
            <div className={styles.WindowContentsStyle}>
                

            </div>
        </div>
    );
}