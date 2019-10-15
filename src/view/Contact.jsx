import React, {Component} from "react";
import ContactInformation from "../components/ContactInformation";
import ContactForm from "../components/ContactForm";
import Meta from "../components/layout/Meta";
import contact_data from "../data/contact";

class Contact extends Component {
    render() {
        let slicedInfo = contact_data.slice(1, 5);

        return (
            <React.Fragment>
                <Meta
                    title="Contact strana"
                    description="Opis strane"
                    image="slika.jpg"
                />
                <div className="content center contact">
                    <section className="auto-container">
                        <h2 className="title">Contact us</h2>
                        <div className="row contact-form-wrapper">
                            <div className="contact-form column-half left">
                                <div className='column-half__inner-wrapper'>
                                    <ContactForm/>
                                </div>
                            </div>

                            <div className="contact-info column-half left">
                                <div className='column-half__inner-wrapper'>
                                    <h3 className="subtitle">Have a question?</h3>
                                    <h3 className="subtitle-colored">Ask us anything!</h3>
                                    <p>
                                        Don't hesitate to contact us! We will reply as soon as
                                        possible to provide you with any kind of answer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="auto-container">
                        <ul className="contact-info-blocks clearfix">
                            {slicedInfo.map((item, index) => {
                                return (
                                    <li key={index} className='conact-info__item column-half left'>
                                        <div className='column-half__inner-wrapper clearfix'>
                                            <ContactInformation icon={item.icon}
                                                                title={item.title}
                                                                information={item.information}
                                            />
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                </div>
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8518.77952259044!2d11.944986086373346!3d57.73862420012185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff4b7fbe05123%3A0xb0af8b9c57c29c22!2sAr%C3%B6ds+industriv%C3%A4g+56%2C+422+43+Hisings+Backa%2C+Sweden!5e0!3m2!1sen!2srs!4v1560693272323!5m2!1sen!2srs"
                        width="600"
                        height="450"
                        frameBorder="0"
                        allowFullScreen
                        title="contact map"
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;
