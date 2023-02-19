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

  return <></>;
}

export default BasicInformation;
