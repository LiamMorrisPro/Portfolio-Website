import DesktopIcon from "./DesktopIcon";

export default function DesktopGrid({ addComponent }){
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
    };

    return (
        <>
        <div style={containerStyle}>
            {/* Left side grid */}
            <div style={leftStyle}>
            <DesktopIcon iconPath="./icons/folder-w.png" windowName="Projects" addComponent={addComponent}></DesktopIcon>
            <DesktopIcon iconPath="./icons/gallery-w.png" windowName="Gallery" addComponent={addComponent}></DesktopIcon>
            <DesktopIcon iconPath="./icons/id-card-w.png" windowName="About" addComponent={addComponent}></DesktopIcon>
            <DesktopIcon iconPath="./icons/contact-w.png" windowName="Contact" addComponent={addComponent}></DesktopIcon>
            <DesktopIcon iconPath="./icons/link-w.png" windowName="Links" addComponent={addComponent}></DesktopIcon>
            {/* Add more grid items as needed */}
            </div>
        </div>
      
        </>

    );
}



