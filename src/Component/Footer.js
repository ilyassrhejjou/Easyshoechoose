import React from "react";
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import "../Css/Footer.css";
import { useHistory } from 'react-router-dom'
const Footer=()=>{
    let history = useHistory()
    return(
        <>
    <footer>
        <div className="container container-flex">
            <div className="Icons">
                <Facebook onClick={()=> window.location.href = 'https://www.facebook.com/nike/'} className="IconFooter"/>
                <Instagram onClick={()=> window.location.href = 'https://www.instagram.com/nike/?hl=en'} className="IconFooter"/>
                <Twitter onClick={()=> window.location.href = 'https://twitter.com/Nike/'} className="IconFooter"/>
            </div>
            <div className="email">
                <p>contact@easyshoechoose.fr</p>
            </div>
            <div className="copyright">
                <p>&copy; 2021 easyshoechoose.fr</p>
            </div>
        </div>
    </footer>
        </>
    )
}
export default Footer;