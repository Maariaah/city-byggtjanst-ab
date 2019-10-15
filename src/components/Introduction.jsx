import React, {Component} from "react";
import introImg from "../assets/images/intro.jpg";
import Button from "./Button.jsx";

class Introduction extends Component {
    render() {
        return (
            <section className="introduction auto-container row">
                <div className="column-half left">
                    <h2 className="title__small-screen title">
                        Snickare & Byggentreprenör i Göteborg Hisingen
                    </h2>
                    <img src={introImg} alt="City Byggtjanst AB project"/>
                </div>
                <div className="column-half right">
                    <div className="column-half__inner-wrapper">
                        <h2 className="title__large-screen">
                            Snickare & Byggentreprenör i Göteborg Hisingen
                        </h2>
                        <p>
                            Vi hjälper företag och fastighetsägare med allt inom bygg och
                            hantverkstjänster, samt trädgårdsskötsel och städning. City
                            Byggtjänst i Norden AB utgår från Centrala Hisingen och utför
                            arbeten lokalt i Halland och Göteborgsområdet med omnejd.
                        </p>
                        <p>
                            Företaget grundades 2017 av 2 vänner och nu har vi lyckats expandera
                            till ett stort entreprenadföretag med 12 anställda. Kontakta oss
                            idag för kostnadsfri offert på ert nästa renoveringsprojekt!
                        </p>
                        <Button class="button primary-button" title={"Learn more"} path={'./About'}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Introduction;
