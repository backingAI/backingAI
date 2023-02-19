// import web from "./images/web.jpg";
//import logo from "./images/logo.png";
import { useState } from "react";
//import BasicInformation from "./BasicInformation/BasicInformation";
import "./App.css";

let nextId = 0;

function App() {
  const [hello1, setHello1] = useState("");
  const [hello2, setHello2] = useState("");
  const [sheet3, setSheet3] = useState("");

  const [isShown, setIsShown] = useState("");

  const handelClick = (event) => {
    setHello2(false);
    setSheet3(false);
    setIsShown((current) => !current);
  };
  const handelClick2 = (event) => {
    setIsShown(false);
    setSheet3(false);
    setHello2((current) => !current);
  };

  const handelClick3 = (event) => {
    setIsShown(false);
    setHello2(false);
    setSheet3((current) => !current);
  };

  //var cityInfo = [];

  //   { zone: "", towns: [], ucs: 0, population: 0 }
  const [zone, setZone] = useState("");
  const [towns, setTowns] = useState("");
  const [ucs, setucs] = useState("");
  const [population, setpopulation] = useState("");
  const [cityInfo1, setCityInfo1] = useState([]);
  const [mw, setmw] = useState(0);
  const [bw, setbw] = useState(0);

  const [totalUcs, setTotalUcs] = useState(0);
  const [totalPopulation, setTotalPopulation] = useState(0);
  const [totalSWG, setTotalSWG] = useState(0);
  const [totalMSW, settotalMSW] = useState(0);

  const handelSubmit = (event) => {
    event.preventDefault();
    var rowDict = {};
    rowDict.zone = zone;
    rowDict.towns = towns;
    rowDict.ucs = ucs;
    rowDict.population = population;
    setCityInfo1((arr) => [
      ...arr,
      {
        id: nextId++,
        zone: zone,
        towns: towns,
        ucs: ucs,
        population: population,
        mw: 0,
        bw: 0,
      },
    ]);
    setTotalPopulation(totalPopulation + parseInt(population));
    setTotalUcs(totalUcs + parseInt(ucs));
    setTotalSWG(Math.round(totalPopulation / 0.54));
  };

  return (
    <>
      <div className="main-div">
        <div className="div-menue">
          <h1 onClick={handelClick}>Basic City Information</h1>
          <h1 onClick={handelClick2}>Water Generation & major component</h1>
          <h1 onClick={handelClick3}>Commercial Waste</h1>
        </div>
        {isShown && (
          <div className="div-content">
            <div>
              <h1>Enter Zone Information</h1>
            </div>
            <div>
              <div>
                <label>
                  {" "}
                  Zone
                  <input
                    type="text"
                    onChange={(e) => setZone(e.target.value)}
                  />
                </label>
                <label>
                  {" "}
                  Towns
                  <input
                    type="text"
                    onChange={(e) => setTowns(e.target.value)}
                  />
                </label>
                <label>
                  {" "}
                  UCS
                  <input type="text" onChange={(e) => setucs(e.target.value)} />
                </label>
                <label>
                  {" "}
                  Population
                  <input
                    type="text"
                    onChange={(e) => setpopulation(e.target.value)}
                  />
                </label>
                <button
                  className="submit-btn"
                  value="update"
                  onClick={handelSubmit}
                >
                  Submit
                </button>
                <div className="results">
                  {cityInfo1.map((city) => (
                    <div className="result-inner">
                      <div className="para-div">
                        <p className="zone-info-p">{city.zone}</p>
                      </div>
                      <div className="para-div">
                        <p className="zone-info-p"> {city.towns}</p>
                      </div>
                      <div className="para-div">
                        <p className="zone-info-p">{city.ucs}</p>
                      </div>
                      <div className="para-div">
                        <p className="zone-info-p">{city.population}</p>
                      </div>
                    </div>
                  ))}
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
            {/* <div className="para-div-1">
              <h3>Zone</h3>
            </div>
            <div className="para-div-1">
              <h3>SWG(kg/d)</h3>
            </div>
            <div className="para-div-1">
              <h3>SWG(t/d)</h3>
            </div>
            <div className="para-div-1">
              <h3>%MW</h3>
            </div>
            <div className="para-div-1">
              <h3>%BW</h3>
            </div> */}
            {/* <div className="sheet-2-main-dev"> */}
            {cityInfo1.map((city) => (
              <div className="sheet-2-inner-div">
                <div className="para-div-1">
                  <p className="zone-info-p">{city.zone}</p>
                </div>
                <div className="para-div-1">
                  <p className="zone-info-p">
                    SWG(Kg/d): {Math.round(city.population * 0.54)}
                  </p>
                </div>
                <div className="para-div-1">
                  <p className="zone-info-p">
                    SWG(t/d): {Math.round((city.population * 0.54) / 1000)}
                  </p>
                </div>
                <div className="para-div-1">
                  <label>
                    %MW
                    <div className="para-div-1">
                      <input
                        type="text"
                        onChange={(e) => {
                          setmw(e.target.value);
                          city.mw = e.target.value;
                          city.bw =
                            Math.round((1 - parseFloat(e.target.value)) * 100) /
                            100;
                          settotalMSW(
                            totalMSW +
                              Math.round(
                                Math.round((city.population * 0.54) / 1000) *
                                  city.bw
                              )
                          );
                        }}
                      />
                    </div>
                  </label>
                </div>
                <div className="para-div-1">
                  <p className="zone-info-p">%MW: {city.mw}</p>
                </div>
                <div className="para-div-1">
                  <p className="zone-info-p">%BW: {city.bw}</p>
                </div>

                <p>
                  {Math.round(
                    Math.round((city.population * 0.54) / 1000) * city.mw
                  )}
                </p>
                <p>
                  {Math.round(
                    Math.round((city.population * 0.54) / 1000) * city.bw
                  )}
                </p>
              </div>
            ))}
            {/* </div> */}
            <p>Total SWG: {totalSWG}</p>
            <p>Total SWG/1000: {Math.round(totalSWG / 1000)}</p>
            <p>Total MSW: {totalMSW}</p>
          </div>
        )}
        {sheet3 && (
          <div className="div-content">
            <h1>sheet 3</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
