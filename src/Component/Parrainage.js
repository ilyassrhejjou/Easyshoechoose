import React from "react";
import '../Css/Parrainage.css'
import startup from "../img/startup.png"
import computer from "../img/computer.png"
import notification from "../img/notification.png"
import gift from "../img/gift.png"
import par_1_minute from "../img/par_1_minute.png"
import index from "../img/index.png";

function AlertFunction(){
    alert("Votre message a été envoyé avec succés");
}

const Parrainage=()=>{
    return(
        <>
        <div className="bodyy">
                 <div>
            <h1>Parrainage</h1>
            <hr/>
        </div>

        <div>   
            <div>
                    <h2 >Parrainez vos proches,</h2>
                    <h2 className="titre1"><span className="titre">tout le monde y gagne</span></h2>
                    <div className="box">
                        <section className="box1">
                            <p className="tag">pour vous</p>
                            <p className="until">Jusqu'à</p>
                            <p className="price">15<sup>€</sup><span>offerts</span></p>
                            <p className="from">par filleul validé</p>
                        </section>
                        <section className="box2">
                            <p className="tag">pour votre filleul</p>
                            <p className="until">Jusqu'à</p>
                            <p className="price">15<sup>€</sup><span>offerts</span></p>
                            <p className="from">dès son statut validé</p>
                        </section>
                    </div>
                  
                    <input className="bttn btn" type="button" value="PARRAINER VOS PROCHES" onClick={AlertFunction}/>
                   
            </div>
        </div>
        <div className="comment">
            <p className="title-black">Comment</p>
            <p className="title-green">ça marche ?</p>
        </div>
        <div className="iconn">
            <div className="icon1 ic">
                <ul>
                    <li><img src={startup} alt="" width="100px"/></li>
                    <li>Envoyez votre code parrain unique à vos filleuls</li>
                </ul>
                
            </div>
            <div className="icon2 ic">
                <ul>
                    <li><img src={computer} alt="" width="100px"/></li>
                    <li>Vos futurs filleuls souscrivent avec votre code</li>
                </ul>
                
            </div>
            <div className="icon3 ic">
                <ul>
                    <li><img src={notification} alt="" width="100px"/></li>
                    <li>Vous recevez une notification pour vous informer du statut de vos filleuls</li>
                </ul>
                
            </div>
            <div className="icon4 ic">
                <ul>
                    <li><img src={gift} alt="" width="100px"/></li>
                    <li>Une fois leur statut validé, vous gagnez des euros à échanger contre des avantages</li>
                </ul>
                
            </div>
        </div>
        <div className="video">
            <h2><strong>On vous explique tout ici</strong></h2>
            <img  className="img-parrainage" src={par_1_minute} alt="" width="600px"/>
        </div>

        <div className="avis">
            <div className="avis1 ic">
                <ul>
                    <li><img src={index} alt="" width="200px"/></li>
                   
                </ul>
                
            </div>
            <div className="avis2 ic">
                <ul>
                    <li><strong>VINCENT C.</strong></li>
                    <li>⭐⭐⭐⭐⭐</li>
                    <li>parfait trés rapide</li>
                </ul>
                
            </div>
            <div className="avis3 ic">
                <ul>
                    <li><strong>KIM N.</strong></li>
                    <li>⭐⭐⭐⭐</li>
                    <li>OK, PAS MAL! </li>
                </ul>
                
            </div>
            <div className="avis4 ic">
                <ul>
                    <li><strong>ERIC P.</strong></li>
                    <li>⭐⭐⭐⭐</li>
                    <li>Cool</li>
                </ul>
                
            </div>
            <div className="avis5 ic">
                <ul>
                    <li><strong>JEREMIE F.</strong></li>
                    <li>⭐⭐⭐</li>
                    <li>Je n’arrive pas à accéder à mon espace perso . J’ai déjà indiqué au service mon problème .</li>
                </ul>
                
            </div>
        </div>
        </div>
        </>
    )
}
export default Parrainage;