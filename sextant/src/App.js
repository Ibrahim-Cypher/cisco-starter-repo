import React from 'react';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import IpAPIFetch from './components/IpAPIFetch';
import LatencyDisplay from './components/LatencyDisplay';

const App = () => {
  return (
    <div className="app">
      <Banner />
      <Exhibit name="Public IPv4 Address">
        <IpAPIFetch type="IPv4" url="https://api.ipify.org?format=json" />
      </Exhibit>
      <Exhibit name="Public IPv6 Address">
        <IpAPIFetch type="IPv6" url="https://api64.ipify.org?format=json" />
      </Exhibit>
      <Exhibit name="Packet Latency">
        <LatencyDisplay />
      </Exhibit>
    </div>
  );
};

export default App;
