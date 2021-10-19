import React from "react";
import "../Css/Error.css";
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
const Error404=()=>{
    return(
        <>
	<div id="notfound">
		<div class="notfound-bg"></div>
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
			</div>
			<h2>La page que vous recherchez semble introuvable</h2>
			<a href="/" class="home-btn">Acceuil</a>
			<a href="/contact" class="contact-btn">Contactez nous</a>
			<div class="notfound-social">
            <Facebook onClick={()=> window.location.href = 'https://www.facebook.com/nike/'} className="IconFooter"/>
            <Instagram onClick={()=> window.location.href = 'https://www.instagram.com/nike/?hl=en'} className="IconFooter"/>
            <Twitter onClick={()=> window.location.href = 'https://twitter.com/Nike/'} className="IconFooter"/>
			</div>
		</div>
	</div>


        </>
    )
}
export default Error404;