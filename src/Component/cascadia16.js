import cascadia from "../img/cascadia16.png"
import QRcode from "../img/QRcode.png"
import Petit_bonhomme from "../img/logo_petit_bonhomme.png"
import Petite_chaussure from "../img/logo_petite_chaussure.png"
import Petite_balance from "../img/logo_petit_balance.png"
import Petit_arbre from "../img/logo_petit_arbre.png"
import Note_4sur5 from "../img/Note_4sur5.png"
import Note_5sur5 from "../img/Note_5sur5.png"
import Note_3sur5 from "../img/Note_3sur5.png"

import "../Css/cascadia16.css"

const cascadia16=()=>{
    return(
        <>
        <head>
            <meta charset="utf-8" />
            <link rel="stylesheet" href="cascadia16.css" />
            <title>Page Cascadia16</title>
        </head>
    
        <body>
        <div id = "conteneur">
            <div className="Gauche">
            
            <a href={cascadia}><img src={cascadia} alt="Photo de chaussure" title="Cliquez pour agrandir"classNameName = "chaussure" /></a>
           
            <img src={QRcode} alt="Photo du QRcode" classNameName = "QRcode"/>
        
            </div>

            <div className="Milieu">
            <section className = "caracchaussure">
                <h2>Caracteristique chaussure <strong classNameName = "titre">Cascadia16</strong></h2>

                    <h3>Pointure :</h3>
                        <ul>
                            <li><p>EU 40.0 à 49.5</p></li>
                        </ul>
                    <h3>Parfaite pour :</h3>
                    <section className = "zone_caracchaussure">
                        <section className = "zone_caracchaussure_1">
                            <section className = "caracteristique_c">
                                <img src={Petit_bonhomme} className = "bonhomme_photo"/>
                                <p>Trail</p>
                            </section>
                            <section className = "caracteristique_c">
                                <img src={Petite_chaussure} className = "chaussure_photo"/>
                                <p>Traction</p>
                            </section>
                        </section>
                        <section className = "zone_caracchaussure_2">
                            <section className = "caracteristique_c">
                                <img src={Petite_balance} className = "balance_photo"/>
                                <p>Stabilité tout terrain</p>
                            </section>
                            <section className = "caracteristique_c">
                                <img src={Petit_arbre} className = "arbre_photo"/>
                                <p>Protection contre les racines</p>
                            </section>
                        </section>
                    </section> 
                
            </section>
            <section className = "Barre1"> </section>
            <section className = "caracfabricant">
                <h2>Caracteristique du fabricant</h2>
                    <h3>Specifications :</h3>
                    <ul>
                        <li><p>Experience : Cushion</p></li>
                        <li><p>Niveau d'experience : Trail technique</p></li>
                        <li><p>Soutien : Neutre</p></li>
                    </ul>
            </section>
            </div>
            <div className = "Barre2"> </div>
            <div className="Droite">
                <section className = "prix">
                    <h1>140.00 €</h1>
                </section>
                    <a href="https://www.brooksrunning.com/fr_fr/cascadia-16-mens-flexible-trail-running-shoe/110376.html" target = "_blank" className = "lien1"><p className = "lien2">Lien vers le site</p></a>


                <section className = "note1">
                    <h2>Notes</h2>
                        <img src={Note_4sur5} className = "Note_finale"/>
                    <h2>Commentaires</h2>
                </section>
                <section className = "note2">
                        <section className = "zone_commentaire">
                            <img src={Note_5sur5} className = "Note_5sur5"/>
                            <p className = "commentaire"><strong> Runnerdu29</strong> <br/>Une super chaussure !</p>
                        </section> 
                        <section className = "zone_commentaire">
                            <img src={Note_3sur5} className = "Note_3sur5"/>
                            <p className = "commentaire"><strong>Fandecourse18</strong><br/>Bonnes chaussures, malgré un mauvais maintien de la cheville.</p>
                        </section>
                        <section className = "zone_commentaire">
                            <img src={Note_4sur5} className = "Note_3sur5"/>
                            <p className = "commentaire"><strong>Chaussuremax</strong><br/>Sympa.</p>
                        </section>
                        <section className = "zone_commentaire">
                            <img src={Note_4sur5} className = "Note_3sur5"/>
                            <p className = "commentaire"><strong>Jesuischaussure</strong><br/>Peu mieux faire.</p>
                        </section>
                </section>
            </div>
        </div>
        </body>

    </>
    )
}
export default Encyclo;