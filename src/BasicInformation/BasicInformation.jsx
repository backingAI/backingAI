import { useState } from "react";
import "../BasicInformation/BasicInformation.css";

function BasicInformation() {
  //var cityInfo = [];
  let nextId = 0;
  //   { zone: "", towns: [], ucs: 0, population: 0 }
  const [zone, setZone] = useState("");
  const [towns, setTowns] = useState("");
  const [ucs, setucs] = useState("");
  const [population, setpopulation] = useState("");
  const [totalUcs, setTotalUcs] = useState(0);
  const [totalPopulation, setTotalPopulation] = useState(0);
  const [cityInfo1, setCityInfo1] = useState([]);

  const handelSubmit = (event) => {
    event.preventDefault();
    var rowDict = {};
    rowDict.zone = zone;
    rowDict.towns = towns;
    rowDict.ucs = ucs;
    rowDict.population = population;
    //cityInfo1.push(rowDict);
    setCityInfo1((arr) => [
      ...arr,
      {
        id: nextId++,
        zone: zone,
        towns: towns,
        ucs: ucs,
        population: population,
      },
    ]);
    console.log(totalPopulation + parseInt(population));
    setTotalPopulation(totalPopulation + parseInt(population));
    setTotalUcs(totalUcs + parseInt(ucs));
  };

  return (
    <>
      <div>
        <div>
          <label>
            {" "}
            Zone
            <input
              type="text"
              //   value={totalOrganicWaste}
              onChange={(e) => setZone(e.target.value)}
            />
          </label>
          <label>
            {" "}
            towns
            <input
              type="text"
              //   value={totalOrganicWaste}
              onChange={(e) => setTowns(e.target.value)}
            />
          </label>
          <label>
            {" "}
            ucs
            <input
              type="text"
              //   value={totalOrganicWaste}
              onChange={(e) => setucs(e.target.value)}
            />
          </label>
          <label>
            {" "}
            population
            <input
              type="text"
              //   value={totalOrganicWaste}
              onChange={(e) => setpopulation(e.target.value)}
            />
          </label>
          <button className="submit-btn" value="update" onClick={handelSubmit}>
            Calculate
          </button>
          <div className="results">
            {/* <p>{totalUcs}</p>
            <p>{totalPopulation}</p> */}
            <ul>
              <li></li>
            </ul>
            <ul>
              {cityInfo1.map((city) => (
                <li key={city.id}>
                  {city.ucs} {city.population}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default BasicInformation;
