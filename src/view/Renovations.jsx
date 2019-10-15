import React, {Component} from "react";
import renovation_list from "../data/renovations";
import search from "../../src/assets/icons/search.svg";
import Meta from "../components/layout/Meta";
import Icon from "../components/Icon"

class Renovations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialItems: renovation_list,
            updatedItems: renovation_list
        };
    }

    handleChange = event => {
        let updatedList = this.state.initialItems.filter(function (item) {
            return (
                item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
            );
        });

        this.setState({
            updatedItems: updatedList
        });
    };

    render() {
        return (
            <React.Fragment>
                <Meta
                    title="Renovations strana"
                    description="Opis strane"
                    image="slika.jpg"
                />
                <div className="content center renovations">
                    <section className="auto-container">
                        <h2 className="title">Renovations</h2>
                        <h3 className="subtitle">TOTALRENOVERING I GÖTEBORG</h3>
                        <div className="search">
                            <label htmlFor="search">
                                <input type="text" placeholder="Search..." onChange={event => this.handleChange(event)}
                                       name="search" id="search"/>
                            </label>
                            <img src={search} alt="" className="icon"/>
                            <p>Vanligt förekommande Byggtjänsvi utför är</p>
                            <ul className="cards row">
                                {this.state.updatedItems.map((item, index) => {
                                    return (
                                        <li className="card" key={index}>
                                            <Icon className="card__icon" name={item.icon}/>
                                            <h3 className="card__title">{item.name}</h3>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default Renovations;
