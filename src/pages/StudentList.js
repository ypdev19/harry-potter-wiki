import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";

const StudentList = () => {
  let [house, updateHouse] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);

  const api = house ? `http://hp-api.herokuapp.com/api/characters/house/${house}` : `http://hp-api.herokuapp.com/api/characters/students`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Students</h1>
      <div className="container">
        <div className="row">
          <Filter
            house={house}
            updateHouse={updateHouse}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={fetchedData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
