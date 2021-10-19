import Asics from "../img/Asics_gel_excite_w9.png"
import Nike_revolution from "../img/Nike_revolution_5.png"
import Brooks_glycerine from "../img/Brooks_glycerine_19.png"
import pub1 from "../img/ad3.jpg"
import pub2 from "../img/ad4.jpg"
import React from "react";
import Square_box from "../icons/square_box.svg"
import Brooks_Cascada_19 from "../img/cascadia16.png"
import { useHistory } from 'react-router-dom'

import "../Css/List_chaussure.css"
import "../Css/Header_encyclopedie.css"
const Encyclo=()=>{
    return(
        <>
            <head>
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="style.css" />
                <title></title>
            </head>
            <body>
                <div className="header">
                    <p className="reset_filtre">
                         Réinitialiser les filtres
                    </p>

                    <p className="filtrer_par">
                        Filtrer par
                    </p>
                    
                    <p className="homme_femme">
                        <span>Chaussure Homme    </span>
                        <img src={Square_box} className="box" /> <br/>
                        <span>Chaussure Femme    </span>
                        <img src={Square_box} className="box" />
                    </p>
                </div>

                <div className="body">
                    <div className="List_chaussure">
                        <a href=""><div className="card_chaussure">
                            <h1 className="titre_chaussure">
                                BROOKS Cascadia 16
                            </h1>
                           
                            <div className="img_chaussure">
                               <a href=""> <img src={Brooks_Cascada_19} width="150px" height="150px" className="flottant" /></a>
                            </div>
                            <div className="liste_caracteristique">
                                <ul>
                                    <li>Experience cushion</li>
                                    <li>Trail</li>
                                    <li>Traction optimal</li>
                                    <li>140.00€</li>
                                </ul>
                            </div>
                        </div></a>


                        <a href=""><div className="card_chaussure">
                            <h1 className="titre_chaussure">
                                ASICS Gel Excite-W9
                            </h1>



                            <div className="img_chaussure">
                                <a href=""><img src={Asics} width="150px" height="150px" className="flottant" /></a>
                            </div>
                            <div className="liste_caracteristique">
                                <ul>
                                    <li>Stabilite</li>
                                    <li>Amortie augmenté</li>
                                    <li>Traction amlioré</li>
                                    <li>165.99€</li>
                                </ul>
                            </div>
                        </div></a>




                        <a href=""><div className="card_chaussure">
                            <h1 className="titre_chaussure">
                                <a href=" " >Nike Revolution 6 </a>
                            </h1>


                            <div className="img_chaussure">
                                <a href=""> <img src={Nike_revolution} width="150px" height="150px" className="flottant" /></a>
                            </div>
                            <div className="liste_caracteristique">
                                <ul>
                                    <li>Légerté</li>
                                    <li>Confort</li>
                                    <li>Compatibilité à tous les terrains</li>
                                    <li>98.45€</li>
                                </ul>
                            </div>
                        </div></a>




                        <a href = ""><div className="card_chaussure">
                            <h1 className="titre_chaussure">
                                BROOKS Glycerine 19
                            </h1>


                            <div className="img_chaussure">
                                <a href=""><img src={Brooks_glycerine} width="150px" height="150px" className="flottant" /></a>
                            </div>
                            <div className="liste_caracteristique">
                                <ul>
                                    <li>Foulée universelle</li>
                                    <li>Adapté pour sentier</li>
                                    <li>Soutient maximal</li>
                                    <li>132.99€</li>
                                </ul>
                            </div>
                        </div></a>



                    </div>
                    <div className="ad">
                        <a href="https://www.nike.com/RUNNING" target="_blank"><img src={pub1} width="250px" height="250px" /></a>
                        <a href="https://oranginasuntoryfrance.com/nos-marques/oasis/" target="_blank"><img src={pub2} width="250px" height="250px" /></a>
                    </div>
                </div>
            </body>
        </>
    )
}
export default Encyclo;