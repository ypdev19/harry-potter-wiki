import React, {useState, useEffect} from "react";

//Components
import Card from "../components/Card/Card";
import Filter from "../components/common/filter/Filter";
import Pagination from '../components/common/pagination/Pagination';
import LoadingSpinner from "../components/common/loadingSpinner/LoadingSpinner";

const StudentList = () => {
  let [house, updateHouse] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);

  const api = house ? `https://hp-api.onrender.com/api/characters/house/${house}` : `https://hp-api.onrender.com/api/characters/students`;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setLoading(true);

      const data = await fetch(api).then((respose) => respose.json());
      updateFetchedData(data);
      setLoading(false);
    })();
  }, [api]);

  
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = fetchedData.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(fetchedData.length / recordsPerPage);

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
              {loading ? <LoadingSpinner /> : <Card results={currentRecords} />}
            </div>
          </div>
        </div>
      </div>
      <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default StudentList;
