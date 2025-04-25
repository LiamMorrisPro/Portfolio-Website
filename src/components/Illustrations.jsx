
export default function Illustrations(props){

    const styles = {
       width: "100vh",
       margin: "auto",
       display: "block"
    }


    return(

        <div>
            <img src= {props.imgPath} style={styles}></img>
        </div>
    );
}

