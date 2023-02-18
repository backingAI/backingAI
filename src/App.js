// import web from "./images/web.jpg";
//import logo from "./images/logo.png";
import { useState } from "react";
//import BasicInformation from "./BasicInformation/BasicInformation";
import "./App.css";

let nextId = 0;

function App() {
  const [hello1, setHello1] = useState("");
  const [hello2, setHello2] = useState("");

  const [isShown, setIsShown] = useState("");

  const handelClick = (event) => {
    setHello2(false);
    setIsShown((current) => !current);
  };
  const handelClick2 = (event) => {
    setIsShown(false);
    setHello2((current) => !current);
  };

  //var cityInfo = [];

  //   { zone: "", towns: [], ucs: 0, population: 0 }
  const [zone, setZone] = useState("");
  const [towns, setTowns] = useState("");
  const [ucs, setucs] = useState("");
  const [population, setpopulation] = useState("");
  const [totalUcs, setTotalUcs] = useState(0);
  const [totalPopulation, setTotalPopulation] = useState(0);
  const [cityInfo1, setCityInfo1] = useState([]);
  const [mw, setmw] = useState(0);
  const [bw, setbw] = useState(0);

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
        mw: mw,
        bw: bw,
      },
    ]);
    console.log(totalPopulation + parseInt(population));
    console.log();
    setTotalPopulation(totalPopulation + parseInt(population));
    setTotalUcs(totalUcs + parseInt(ucs));
  };

  return (
    <>
      <div className="main-div">
        <div className="div-menue">
          <h1 onClick={handelClick}>Basic City Information</h1>
          <h1 onClick={handelClick2}>Water Generation & major component</h1>
        </div>
        {isShown && (
          <div className="div-content">
            {/* <BasicInformation /> */}
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
                <button
                  className="submit-btn"
                  value="update"
                  onClick={handelSubmit}
                >
                  Calculate
                </button>
                <div className="results">
                  <ul>
                    {cityInfo1.map((city) => (
                      <li key={city.id}>
                        {city.zone} {city.towns} {city.ucs} {city.population}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <p>Total Ucs : {totalUcs}</p>
                <p>Total population{totalPopulation}</p>
              </div>
            </div>
          </div>
        )}
        {hello2 && (
          <div className="div-content">
            <h1>hello 2</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
