import React from "react";
import "./style.css"
import sectionsData from "../../mocks/db"
import Button from "../Button"

const SectionComponent = () => {
  return (
    <div>
      {sectionsData.map((section) => (
        <div key={section.id} className="section-container">
          <div className="section-image">
            <img src={section.image} alt="Illustration" />
          </div>
          <div className="section-content">
            <h2 className="section-title">{section.title}</h2>
            <p className="section-description">{section.description}</p>
            <p className="section-description">{section.descript}</p><br />
            {section.showButton && <Button text={'Purchase Now'}></Button>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionComponent;
