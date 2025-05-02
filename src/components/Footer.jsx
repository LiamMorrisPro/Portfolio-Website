import IconButton from './WebIcon'

function Footer(){

    const footerStyle = {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: '1rem',
        height: '16vh'

     
    }
    const navStyle = {
        display: 'flex',
        padding: '0',
        margin: '0',
        listStyle: 'none'
    }
    const listStyle = {
        marginRight: '10rem',

    }
    const iconStyle = {
        width: '10vh',
        borderRadius: '50%',
        objectFit: 'cover'
    }


    return(
        <header style = {footerStyle}>
            <nav>
                <ul style={navStyle}>
                    <IconButton iconSize = '7vh' iconPath = "icon.PNG"/>
                    <IconButton iconSize = '7vh' iconPath = "icon.PNG"/>
                </ul>
            </nav>
            
        </header>
    );
}

export default Footer