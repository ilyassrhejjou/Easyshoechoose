import React from "react";
import "../Css/Ads.css";



export default function Ads(props) {
    return (
      <div className="container_ads">
        <img src={props.img} class="ad__image" />
      </div>
    );
  }