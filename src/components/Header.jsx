import IconButton from './WebIcon'

function Header(){

    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        height: '15vh'
     
    }
    const navStyle = {
        display: 'flex',
        padding: '0',
        margin: '0',
        listStyle: 'none'
    }
    const listStyle = {
        marginRight: '3rem'
    }
    const iconStyle = {
        width: '10vh',
        borderRadius: '50%',
        objectFit: 'cover'
    }


    return(
        <header style = {headerStyle}>
            <nav>
                <ul style={navStyle}>
                    <IconButton iconSize = '15vh' iconPath = "icon.PNG"/>
                    <IconButton iconSize = '10vh' iconPath = "icon.PNG"/>
                    <li style={listStyle}><a href='#'>Contact</a></li>
                </ul>
            </nav>
            
        </header>
    );
}

export default Header