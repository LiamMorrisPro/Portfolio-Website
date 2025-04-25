import {useState} from 'react';
import { Howl, Howler } from 'howler';

export default function SoundButton(props){
    const [isClicked, setIsClicked] = useState(false);

   

    const iconStyle = {
        width: props.iconSize,
        height: props.iconSize,
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '0.5rem',
        cursor: 'pointer',
        transition: 'transform 0.1s ease-in-out',
        transform: isClicked ? 'scale(0.85)' : 'scale(1)',
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
            onClick={handleClick}  // Added the click handler
            />
        </div>

      );
}

