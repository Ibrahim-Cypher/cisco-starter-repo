import React, { useState, useEffect } from 'react';
import * as WebSocketClient from 'websocket';

const LatencyDisplay = () => {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const wsClient = new WebSocketClient.w3cwebsocket('ws://localhost:2000');

    wsClient.onopen = () => {
      console.log('Connected to Pylon WebSocket server');
    };

    wsClient.onmessage = message => {
      if (typeof message.data === 'string') {
        const packetTimestamp = parseInt(message.data);
        const currentTimestamp = Date.now();
        const packetLatency = currentTimestamp - packetTimestamp;

        setLatency(packetLatency);
      }
    };

    wsClient.onclose = () => {
      console.log('Connection closed');
    };

    return () => {
      wsClient.close();
    };
  }, []);

  return (
    <div>
      <h2>Packet Latency:</h2>
      {latency !== null ? (
        <p>{latency} ms</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LatencyDisplay;
