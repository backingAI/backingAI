import { useState } from "react";
import "./App.css";

let nextId = 0;
let tempValue = 0;

function App() {
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

  const [zone, setZone] = useState("");
  const [towns, setTowns] = useState("");
  const [ucs, setucs] = useState("");
  const [population, setpopulation] = useState("");
  const [cityInfo1, setCityInfo1] = useState([]);
  const [mw, setmw] = useState(0);
  const [bw, setbw] = useState(0);
  const [valueR, setValueR] = useState(0);
  const [valueCWsm, setvalueCWsm] = useState(0);
  const [valueCWmm, setvalueCWmm] = useState(0);
  const [valueCWlm, setvalueCWlm] = useState(0);
  const [valueCWxlm, setvalueCWxlm] = useState(0);
  const [defaultCWsm, setdefaultCWsm] = useState(0);
  const [defaultCWmm, setdefaultCWmm] = useState(0);
  const [defaultCWlm, setdefaultCWlm] = useState(0);
  const [defaultCWxlm, setdefaultCWxlm] = useState(0);
  //const [tempValue, setTemValue] = useState(0);

  const [totalUcs, setTotalUcs] = useState(0);
  const [totalPopulation, setTotalPopulation] = useState(0);
  const [totalSWG, setTotalSWG] = useState(0);
  const [totalMSW, settotalMSW] = useState(0);
  const [totalSheet3ZoneVal1, setTotalSheet3ZoneVal1] = useState(0);
  const [totalSheet3ZoneVal2, setTotalSheet3ZoneVal2] = useState(0);
  const [totalSheet3ZoneVal3, setTotalSheet3ZoneVal3] = useState(0);
  const [totalSheet3ZoneVal4, setTotalSheet3ZoneVal4] = useState(0);

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
        sheet3ZoneVal: 0,
        entityValue1: 0,
        entityValue2: 0,
        entityValue3: 0,
        entityValue4: 0,
        c5m3: 0,
        c13m3: 0,
        c7m3: 0,
        c25m3: 0,
      },
    ]);
    setTotalPopulation(totalPopulation + parseInt(population));
    setTotalUcs(totalUcs + parseInt(ucs));
    setTotalSWG(Math.round(totalPopulation / parseInt(valueR)));
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
              <h1 className="h1-sheet1">Enter Zone Information</h1>
            </div>
            <div>
              <label>
                {" "}
                Enter Value R
                <input
                  type="text"
                  onChange={(e) => setValueR(e.target.value)}
                />
              </label>
              <div className="para-div">
                <p className="zone-info-p">Value of R: {valueR}</p>
              </div>
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
            <div>
              <h1 className="h1-sheet1">Water Generation & major component</h1>
            </div>
            {cityInfo1.map((city) => (
              <div className="sheet-2-inner-div">
                <div className="para-div-1">
                  <p className="zone-info-p">{city.zone}</p>
                </div>
                <div className="para-div-1">
                  <p className="zone-info-p">
                    SWG(Kg/d): {Math.round(city.population * parseInt(valueR))}
                  </p>
                </div>
                <div className="para-div-1">
                  <p className="zone-info-p">
                    SWG(t/d):{" "}
                    {Math.round((city.population * parseInt(valueR)) / 1000)}
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
                                Math.round(
                                  (city.population * parseInt(valueR)) / 1000
                                ) * city.bw
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
                    Math.round((city.population * parseInt(valueR)) / 1000) *
                      city.mw
                  )}
                </p>
                <p>
                  {Math.round(
                    Math.round((city.population * parseInt(valueR)) / 1000) *
                      city.bw
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
            <div>
              <h1 className="h1-sheet1">Commercial Waste</h1>
            </div>
            <div className="border-div">
              <div>
                <label>
                  {" "}
                  Enter Value CW(sm)
                  <input
                    type="text"
                    onChange={(e) => setvalueCWsm(e.target.value)}
                  />
                </label>
                <div className="para-div">
                  <p className="zone-info-p">Value of CW(sm): {valueCWsm}</p>
                </div>
              </div>
              <div>
                <label>
                  {" "}
                  Enter Value CW(mm)
                  <input
                    type="text"
                    onChange={(e) => setvalueCWmm(e.target.value)}
                  />
                </label>
                <div className="para-div">
                  <p className="zone-info-p">Value of CW(mm): {valueCWmm}</p>
                </div>
              </div>
              <div>
                <label>
                  {" "}
                  Enter Value CW(lm)
                  <input
                    type="text"
                    onChange={(e) => setvalueCWlm(e.target.value)}
                  />
                </label>
                <div className="para-div">
                  <p className="zone-info-p">Value of CW(lm): {valueCWlm}</p>
                </div>
              </div>
              <div>
                <label>
                  {" "}
                  Enter Value CW(xlm)
                  <input
                    type="text"
                    onChange={(e) => setvalueCWxlm(e.target.value)}
                  />
                </label>
                <div className="para-div">
                  <p className="zone-info-p">Value of CW(xlm): {valueCWxlm}</p>
                </div>
              </div>
            </div>
            <div className="border-div">
              <div>
                <label>
                  {" "}
                  Enter Default Value CW(sm)
                  <input
                    type="text"
                    onChange={(e) => setdefaultCWsm(e.target.value)}
                  />
                </label>
                <div className="para-div">
                  <p className="zone-info-p">
                    Default Value of CW(sm): {defaultCWsm}
                  </p>
                </div>
              </div>
              <div>
                <label>
                  {" "}
                  Enter Default Value CW(mm)
                  <input
                    type="text"
                    onChange={(e) => setdefaultCWmm(e.target.value)}
                  />
                </label>
                <div className="para-div">
                  <p className="zone-info-p">
                    Default Value of CW(mm): {defaultCWmm}
                  </p>
                </div>
              </div>
              <div>
                <label>
                  {" "}
                  Enter Default Value CW(lm)
                  <input
                    type="text"
                    onChange={(e) => setdefaultCWlm(e.target.value)}
                  />
                </label>
                <div className="para-div">
                  <p className="zone-info-p">
                    Default Value of CW(lm): {defaultCWlm}
                  </p>
                </div>
              </div>
              <div>
                <label>
                  {" "}
                  Enter Default Value CW(xlm)
                  <input
                    type="text"
                    onChange={(e) => setdefaultCWxlm(e.target.value)}
                  />
                </label>
                <div className="para-div">
                  <p className="zone-info-p">
                    Default Value of CW(xlm): {defaultCWxlm}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-div">
              <div>
                {cityInfo1.map((city) => (
                  <div>
                    <div className="para-div-sheet3">
                      <p className="zone-info-p">
                        Enter Entity values for {city.zone}
                      </p>
                    </div>
                    <label>
                      {" "}
                      <input
                        type="text"
                        onChange={(e) => {
                          setTotalSheet3ZoneVal1(0);
                          city.entityValue1 = e.target.value;
                          setTotalSheet3ZoneVal1(
                            parseInt(totalSheet3ZoneVal1) +
                              parseInt(e.target.value) * parseInt(defaultCWsm)
                          );
                          city.sheet3ZoneVal =
                            city.sheet3ZoneVal +
                            city.entityValue1 * parseInt(defaultCWsm);
                        }}
                      />
                    </label>
                    <label>
                      {" "}
                      <input
                        type="text"
                        onChange={(e) => {
                          city.entityValue2 = e.target.value;
                          setTotalSheet3ZoneVal1(
                            parseInt(totalSheet3ZoneVal1) +
                              parseInt(e.target.value) * parseInt(defaultCWmm)
                          );
                          city.sheet3ZoneVal =
                            city.sheet3ZoneVal +
                            city.entityValue2 * parseInt(defaultCWmm);
                        }}
                      />
                    </label>
                    <label>
                      {" "}
                      <input
                        type="text"
                        onChange={(e) => {
                          city.entityValue3 = e.target.value;
                          setTotalSheet3ZoneVal1(
                            parseInt(totalSheet3ZoneVal1) +
                              parseInt(e.target.value) * parseInt(defaultCWlm)
                          );
                          city.sheet3ZoneVal =
                            city.sheet3ZoneVal +
                            city.entityValue3 * parseInt(defaultCWlm);
                        }}
                      />
                    </label>
                    <label>
                      {" "}
                      <input
                        type="text"
                        onChange={(e) => {
                          city.entityValue4 = e.target.value;
                          setTotalSheet3ZoneVal1(
                            parseInt(totalSheet3ZoneVal1) +
                              parseInt(e.target.value) * parseInt(defaultCWxlm)
                          );
                          city.sheet3ZoneVal =
                            city.sheet3ZoneVal +
                            city.entityValue4 * parseInt(defaultCWxlm);
                          console.log(city.entityValue4);
                          console.log(city.sheet3ZoneVal);
                        }}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-div">
              <div>
                {cityInfo1.map((city) => (
                  <div>
                    <div className="para-div-sheet3">
                      <p className="zone-info-p">
                        Value of {city.zone}: {city.sheet3ZoneVal}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-div">
              <div>
                {cityInfo1.map((city) => (
                  <div>
                    <div className="para-div-sheet3">
                      <p className="zone-info-p">
                        Enter % value of car for {city.zone}
                      </p>
                    </div>
                    <label>
                      {" "}
                      %(car5m3)CW:
                      <input
                        type="text"
                        onChange={(e) => {
                          city.c5m3 = e.target.value;
                        }}
                      />
                    </label>
                    <label>
                      {" "}
                      %(car13m3)CW:
                      <input
                        type="text"
                        onChange={(e) => {
                          city.c13m3 = e.target.value;
                        }}
                      />
                    </label>
                    <label>
                      {" "}
                      %(car7m3)CW:
                      <input
                        type="text"
                        onChange={(e) => {
                          city.c7m3 = e.target.value;
                        }}
                      />
                    </label>
                    <label>
                      {" "}
                      %(car25m3)CW:
                      <input
                        type="text"
                        onChange={(e) => {
                          city.c25m3 = e.target.value;
                        }}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-div">
              <div>
                {cityInfo1.map((city) => (
                  <div>
                    <div className="para-div-sheet3">
                      <p className="zone-info-p">{city.zone} CW(car5m3)%</p>
                      <p className="zone-info-p">
                        {Math.round(parseFloat(city.c5m3) * city.sheet3ZoneVal)}
                      </p>
                      <p className="zone-info-p">{city.zone} CW(car13m3)%</p>
                      <p className="zone-info-p">
                        {Math.round(
                          parseFloat(city.c13m3) * city.sheet3ZoneVal
                        )}
                      </p>
                      <p className="zone-info-p">{city.zone} CW(car7m3)%</p>
                      <p className="zone-info-p">
                        {Math.round(parseFloat(city.c7m3) * city.sheet3ZoneVal)}
                      </p>
                      <p className="zone-info-p">{city.zone} CW(car25m3)%</p>
                      <p className="zone-info-p">
                        {Math.round(
                          parseFloat(city.c25m3) * city.sheet3ZoneVal
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-div">
              <div>
                {cityInfo1.map((city) => (
                  <div>
                    <div className="para-div-sheet3">
                      <p className="zone-info-p">{city.zone} Qty(crm5m3)CW</p>
                      <p className="zone-info-p">
                        {Math.round(
                          Math.round(
                            parseFloat(city.c5m3) * city.sheet3ZoneVal
                          ) /
                            (2.5 * 5)
                        )}
                      </p>
                      <p className="zone-info-p">{city.zone} Qty(crm13m3)CW</p>
                      <p className="zone-info-p">
                        {Math.round(
                          Math.round(
                            parseFloat(city.c13m3) * city.sheet3ZoneVal
                          ) /
                            (2.5 * 5)
                        )}
                      </p>
                      <p className="zone-info-p">{city.zone} Qty(crm7m3)CW</p>
                      <p className="zone-info-p">
                        {Math.round(
                          Math.round(
                            parseFloat(city.c7m3) * city.sheet3ZoneVal
                          ) /
                            (2.5 * 5)
                        )}
                      </p>
                      <p className="zone-info-p">{city.zone} Qty(crm25m3)CW</p>
                      <p className="zone-info-p">
                        {Math.round(
                          Math.round(
                            parseFloat(city.c25m3) * city.sheet3ZoneVal
                          ) /
                            (2.5 * 5)
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-div">
              <div>
                {cityInfo1.map((city) => (
                  <div>
                    <div className="para-div-sheet3">
                      <p className="zone-info-p">{city.zone} Qty(wsc5m3)CW</p>
                      <p className="zone-info-p">
                        {Math.round(
                          (Math.round(
                            parseFloat(city.c5m3) * city.sheet3ZoneVal
                          ) *
                            1000) /
                            2500
                        )}
                      </p>
                      <p className="zone-info-p">
                        {city.zone} Qty (wsc0.8m3)CW
                      </p>
                      <p className="zone-info-p">
                        {Math.round(
                          (Math.round(
                            (parseFloat(city.c13m3) +
                              parseFloat(city.c7m3) +
                              parseFloat(city.c25m3)) *
                              city.sheet3ZoneVal
                          ) *
                            1000) /
                            2500
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
