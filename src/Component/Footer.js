import React from "react";
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import "../Css/Footer.css";
const Footer=()=>{
    return(
        <>
    <footer>
        <div className="container container-flex">
            <div className="Icons">
                <Facebook className="IconFooter"/>
                <Instagram  className="IconFooter"/>
                <Twitter className="IconFooter"/>
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