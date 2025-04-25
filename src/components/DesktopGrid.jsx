import DesktopIcon from "./DesktopIcon";

export default function DesktopGrid(){
    const containerStyle = {
        display: 'flex',
        height: '78vh', // Full height of the screen
        
    };

    const leftStyle = {
        flex: 1,
        backgroundColor: 'none',
        display: 'grid',
        gridAutoFlow: 'column',
        gridTemplateRows: 'repeat(auto-fit, minmax(13vh, 13vh))',
        gridAutoColumns: 'minmax(13vh, 13vh)',
        gap: '1rem',
        padding: '1rem',
        width: 'auto%'
    };

    return (
        <>
        <div style={containerStyle}>
            {/* Left side grid */}
            <div style={leftStyle}>
            <DesktopIcon iconPath="icon.PNG"></DesktopIcon>
            <DesktopIcon iconPath="icon.PNG"></DesktopIcon>
            <DesktopIcon iconPath="icon.PNG"></DesktopIcon>
            <DesktopIcon iconPath="icon.PNG"></DesktopIcon>
            <DesktopIcon iconPath="icon.PNG"></DesktopIcon>
            <DesktopIcon iconPath="icon.PNG"></DesktopIcon>
            <DesktopIcon iconPath="icon.PNG"></DesktopIcon>
            <DesktopIcon iconPath="icon.PNG"></DesktopIcon>
            {/* Add more grid items as needed */}
            </div>
        </div>
      
        </>

    );
}



