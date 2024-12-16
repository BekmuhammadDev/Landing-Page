import React from "react";
import "./style.css"; 
import CardIcon from "../../assets/img/card-icon.png"

const Card = ({ title,  }) => {
  return (
    <div className="card">
      <img src={CardIcon} alt={title} className="card-image" />
      <h3 className="card-title">{'Title Goes Here'}</h3>
      <p className="card-description">Lorem ipsum dolor sit amet, consectetuer <br />  adipiscing elit. Aenean commodo ligula eget <br /> dolor. </p>
    </div>
  );
};

export default Card;
