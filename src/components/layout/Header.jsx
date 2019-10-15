import React, {Component} from "react";
import logo from "../../assets/logo.png";
import {NavLink, Link} from "react-router-dom";
import routes from "../../routes";
import ContactInformation from "../../components/ContactInformation";
import contact_data from "../../data/contact";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobileMenu: true
        };
    }

    toggleMenu = (isMobile) => {
        if (!isMobile) {
            this.setState({isMobileMenu: !this.state.isMobileMenu});
            if (this.state.isMobileMenu) {
                document.body.classList.add("prevent-body-scroll");
            } else {
                document.body.classList.remove("prevent-body-scroll");
            }
        }
    };

    render() {
        const home = routes[0].path;
        const {isMobileMenu} = this.state;
        let slicedInfo = contact_data.slice(0, 3);

        return (
            <header className="main-header">
                <div className="top-header">
                    <div className="center clearfix">
                        <div className="top-header-col__left left">
                            <Link to={home} className='logo'>
                                <img src={logo} alt="City Byggtjanst AB logo"/>
                            </Link>

                            <div className="hamburger" onClick={()=>this.toggleMenu()}
                            >
                                <div
                                    className={`btn ${
                                        this.state.isMobileMenu ? "not-active" : "active"
                                        }`}
                                >
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                            </div>
                        </div>
                        <nav
                            className={`top-header-col__right right ${this.state.isMobileMenu ? "" : " mobile-menu"}`}
                        >
                            <ul className="inline-contact-info">
                                {slicedInfo.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <ContactInformation icon={item.icon}
                                                                title={item.title}
                                                                information={item.information}
                                            />
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div
                    className={`main-menu ${this.state.isMobileMenu ? "" : " mobile-menu"}`}
                >
                    <div className="center">
                        <nav className="main-navigation">
                            <ul>
                                {routes.map((route, index) => (
                                    <li key={index}>
                                        <NavLink onClick={() => this.toggleMenu(isMobileMenu)} exact={true}
                                                 to={route.path}> {route.name} </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
