import React from "react";
import { useParams } from 'react-router-dom';

const Shoe=(props)=>{
    const { params } = props.match;
    const url = "/";
    return(
        <>
        <h1>{params.name}</h1>
        <img src={url+params.img} />
        </>
    )
}
export default Shoe;