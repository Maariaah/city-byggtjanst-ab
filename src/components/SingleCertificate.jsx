import React from "react";
import Icon from "./Icon";

function SingleCertificate(props) {
  return (
     <React.Fragment>
       <img src={props.image} alt="City Byggtjanst AB certificate" />
       <div className="inner-content">
         <Icon name={props.icon}/>
         <h4>{props.title}</h4>
         <p>{props.description}</p>
       </div>
     </React.Fragment>
  );
}

export default SingleCertificate;
