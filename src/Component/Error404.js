import React from "react";
import "../Css/Error.css";
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
			<a href="#" class="home-btn">Acceuil</a>
			<a href="#" class="contact-btn">Contactez nous</a>
			<div class="notfound-social">
				<a href="#"><i class="fa fa-facebook"></i></a>
				<a href="#"><i class="fa fa-twitter"></i></a>
				<a href="#"><i class="fa fa-pinterest"></i></a>
				<a href="#"><i class="fa fa-google-plus"></i></a>
			</div>
		</div>
	</div>


        </>
    )
}
export default Error404;