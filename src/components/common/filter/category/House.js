import React from "react";
import FilterBTN from "../FilterBTN";

const House = ({ updateHouse }) => {
  const hogwartsHouses = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];
  
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          House
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap gap-3">
          {hogwartsHouses.map((items, index) => {
            return (
              <FilterBTN
                name="house"
                index={index}
                key={index}
                task={updateHouse}
                input={items}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default House;
