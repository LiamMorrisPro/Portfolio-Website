import {useState} from 'react';
import { Howl, Howler } from 'howler';

export default function DesktopIcon(props){
    const [isClicked, setIsClicked] = useState(false);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: isClicked ? 'scale(0.85)' : 'scale(1)',
        transition: 'transform 150ms ease-in-out',
        cursor: 'pointer'
      };

    const iconStyle = {
        width: '60%',
        borderRadius: '10%',
        objectFit: 'cover',
    }
    
    const sound = new Howl({
        src:['./sounds/click.mp3'],
        format: ['mp3'],
        volume: '1.0',
    });

    const handleClick = () => {
        setIsClicked(true);
        sound.play();
        props.addComponent(props.windowName)

        setTimeout(() => setIsClicked(false), 100);
    }

    return (
        <>
            <div style={containerStyle}>
                <img
                src={props.iconPath}
                alt="Web Icon"
                style={iconStyle}
                draggable={false}
                onClick={handleClick}  // Added the click handler
                />
                <p style={{textAlign: 'center', fontSize: '18px', margin: '0', color: 'white', fontWeight: 'bold'}}>
                    {props.windowName}
                </p>

            </div>
        </>
      );
}

