
import React from "react";
import "../Css/Product.css";
import { useHistory } from 'react-router-dom'

export default function Card(props) { 
   let history = useHistory()
    return (
      <div className="card">
        <img src={props.img} class="card__image" />
        <div className="card__body">
          <h2 className="card__title card_item" >{props.title}</h2>
          <p className="card__description card_item">{props.description}</p>
          <button className="card__btn card_item" onClick={()=> history.push(`/shoe/${props.title}${props.img}`)}>Voir plus</button>
        </div>
      </div>
    );
  }