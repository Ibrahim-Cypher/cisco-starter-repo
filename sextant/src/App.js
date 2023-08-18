import React from "react";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import IpAPIFetch from "./components/IpAPIFetch";

const App = () => {
  return (
    <div className="app">
      <Banner />
      <Exhibit name="Public IPv4 Address">
        <IpAPIFetch url="https://api.ipify.org?format=json" />
      </Exhibit>
      <Exhibit name="Public IPv6 Address">
        <IpAPIFetch url="https://api64.ipify.org?format=json" />
      </Exhibit>
    </div>
  );
};

export default App;
