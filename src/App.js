import React, { useEffect, useState } from "react";
import axios from "axios";
import Placeholders from "./components/Placeholders";
import Header from "./components/Header";
import InfoBar from "./components/InfoBar";
import CombinedDataCovid from "./components/CombinedDataCovid";
import StateWiseData from "./components/StateWiseData";
import ChartComp from "./components/ChartComp";
import Footer from "./components/Footer";
import {
  appStyles,
  containerClass,
  errorWrapper,
  errorTextClass,
  errorButtonClass
} from "./appStyles";

const App = () => {
  const [data, setdata] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(async () => {
    try {
      const res = await axios.get("https://covid-scraper-mk.herokuapp.com/");
      setLoaded(true);
      setdata(res.data);
    } catch (err) {
      setError(true);
      setLoaded(true);
      console.log(err);
    }
  }, []);

  const errorCode = (
    <div className={errorWrapper}>
      <div className={errorTextClass}>
        Oops Something went wrong, Please try again
      </div>
      <div
        className={errorButtonClass}
        onClick={() => window.location.reload()}
      >
        Reload
      </div>
    </div>
  );

  console.log(Object.keys(data).length);

  return (
    <div className={appStyles}>
      <Header />
      <InfoBar />
      <div className={containerClass}>
        {!loaded && !error ? <Placeholders /> : null}
        {loaded && data && Object.keys(data).length > 1 && !error
          ? [
              <CombinedDataCovid data={data.realData} />,
              <StateWiseData data={data.stateWiseData} />,
              <ChartComp data={data.stateWiseData} />
            ]
          : null}
        {error || Object.keys(data).length === 0 ? errorCode : null}
      </div>
      <Footer />
    </div>
  );
};

export default App;
