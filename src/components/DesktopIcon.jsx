import {useState} from 'react';
import { Howl, Howler } from 'howler';

export default function DesktopIcon(props){
    const [isClicked, setIsClicked] = useState(false);

   

    const iconStyle = {
        width: '80%',
        borderRadius: '10%',
        objectFit: 'cover',
        cursor: 'pointer',
        transition: 'transform 0.1s ease-in-out',
        transform: isClicked ? 'scale(0.85)' : 'scale(1)',
        userSelect: 'none',
    }
    
    const sound = new Howl({
        src:['./sounds/click.ogg'],
        format: ['ogg'],
        volume: '1.0',
    });

    const handleClick = () => {
        setIsClicked(true);
        sound.play();

        setTimeout(() => setIsClicked(false), 100);
    }

    return (
        <div>
            <img
            src={props.iconPath}
            alt="Web Icon"
            style={iconStyle}
            draggable={false}
            onClick={handleClick}  // Added the click handler
            />
        </div>

      );
}

