import React, {Component} from "react";
import image1 from "../assets/images/image_1.png";
import image2 from "../assets/images/image_2.png";
import image3 from "../assets/images/image_3.jpg";
import image4 from "../assets/images/image_4.jpg";
import Meta from "../components/layout/Meta";

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Meta
                    title="About strana"
                    description="Opis strane"
                    image="slika.jpg"
                />
                <div className="center about-us">
                    <section className="auto-container">
                        <h2 className="title">Om City Byggtjänst i Norden AB</h2>
                        <div className="row">
                            <div className="column-half left">
                                <div className="column-half__inner-wrapper">
                                    <h2>Byggentreprenad i Göteborg</h2>
                                    <p>
                                        Vi är ett komplett byggföretag som utför alla vanligt
                                        förekommande bygg- och entreprenadarbeten, samt inom
                                        hushållsnära tjänster som trädgårdsskötsel och städning. City
                                        Byggtjänst i Norden AB har sitt säte i Centrala Hisingen och
                                        hjälper i huvudsak företag och fastighetsägare i Halland och
                                        Göteborgs-området med omnejd.
                                    </p>
                                </div>
                            </div>
                            <div className="column-half right">
                                <div>
                                    <img src={image1} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="column-half right">
                                <div className="column-half__inner-wrapper">

                                    <h2> Bygg i lokala Göteborg</h2>
                                    <p>
                                        Vi är ett riktigt göteborgsföretag och har vår lokal i
                                        centrum. Vi har utfört flera arbeten i närheten så som;
                                        Olskroken, Gamlestaden, Ringön, Heden, Lindholmen,
                                        Johannesberg och Haga. Vi tar ägrna arbeten lokalt – Inget
                                        jobb är för litet eller stort för oss.
                                    </p>
                                </div>
                            </div>
                            <div className="column-half left">
                                <img src={image2} alt=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column-half left">
                                <div className="column-half__inner-wrapper">
                                    <h2>Bygg & Städ – Göteborg</h2>
                                    <p>
                                        Företaget startades år 2017 och drivs av erfarna projektledare
                                        i bygg branchen 25 år. Vi har genom väl utförda arbeten,
                                        tydlig kommunikation och servicekänsla utvecklat verksamheten
                                        och jobbar idag med återkommande kunder och via
                                        rekommendation.
                                    </p>
                                </div>
                            </div>
                            <div className="column-half right">
                                <img src={image3} alt=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column-half right">
                                <div className="column-half__inner-wrapper">
                                    <h2> Totalentreprenad & Pålitligt nätverk</h2>
                                    <p>
                                        City Byggtjänst i Norden AB har med åren samlat på sig goda
                                        kontakter av erfarna och seriösa hantverkare inom alla
                                        yrkesgrupper. Vi åtar oss byggentreprenader där vi sköter
                                        samordning och projektledning av alla hantverksgrupper som
                                        målare, el, vvs m.m för kvalitetssäkring och underlätta
                                        kommunikation genom hela byggprocessen för dig som
                                        uppdragsgivare. Goda referenser finns.
                                    </p>
                                </div>
                            </div>
                            <div className="column-half left">
                                <img src={image4} alt=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column-half left">
                                <div className="column-half__inner-wrapper">
                                    <h2> Nyttja ROT-Avdraget</h2>
                                    <p>
                                        Som privatperson kan du nyttja ROT-Avdraget vid renovering och
                                        hantverkstjänster i ditt hus eller bostadsrätt. Läs mer på
                                        Skatteverkets Hemsida.
                                    </p>
                                </div>
                            </div>
                            <div className="column-half right">
                                <img src={image1} alt=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column-half right">
                                <div className="column-half__inner-wrapper">
                                    <h3> Kvalitet & Service</h3>
                                    <p>
                                        Vi använder oss av kvalitetsmaterial från de ledande
                                        leverantörerna för långsiktiga kundlösningar, och vi ger
                                        givetvis garantier på utförda arbeten. Företaget innehar
                                        erforderliga entreprenadförsäkringar, har god ekonomi, samt
                                        F-Skattsedel. Välkommen att kontakta oss hur vi kan hjälpa dig
                                        i nästa byggprojekt!
                                    </p>
                                </div>
                            </div>
                            <div className="column-half left">
                                <img src={image2} alt=""/>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default About;
