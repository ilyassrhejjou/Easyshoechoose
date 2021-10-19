import React from "react";
import "../Css/Contact.css";
function AlertFunction(){
    alert("Votre message a été envoyé avec succés");
}
const Contact=()=>{
    return(
        <>
    <div className="body_main2">
       <div class="container_form">
    <form>
        <ul>
            <li>
                <label for="name"><span>Name <span class="required-star">*</span></span></label>
                <input type="text" id="name" name="user_name"/>
            </li>
            <li>
                <label for="mail"><span>Email <span class="required-star">*</span></span></label>
                <input type="email" id="mail" name="user_email"/>
            </li>
            <li>
                <label for="msg"><span>Message</span></label>
                <textarea rows="4" cols="50"></textarea>
            </li>
            <li>
                <input type="button" value="submit" onClick={AlertFunction}></input>
            </li>
        </ul>
    </form>
</div>
</div>
        </>
    )
}
export default Contact;