import React from "react";
import Slider from "./Slider";
import Card from "./Product";
import Ads from "./Ads";
import img from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import ad1 from "../img/ad1.gif";
import ad2 from "../img/ad2.gif";
const Home=()=>{
    return(
        <>
        <div className="body_main">
            <div className="top_main">
             <Ads img={ad1}/>
             <Slider/>
             <Ads img={ad2}/>
             </div>
        <div className="Container_products">
            <Card img= {img} title ="Air Jordan 1" description="Lorem Ipsum is simply"/>
            <Card img= {img2} title ="Nike Zoom2" description="Lorem Ipsum is simply"/>
            <Card img= {img3} title ="Nike flex 20" description="Lorem Ipsum is simply"/>
        </div>
        
        </div>
        </>
    )
}
export default Home;