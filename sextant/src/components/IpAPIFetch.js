import React, { useState, useEffect } from 'react';

const IpAPIFetch = ({ url }) => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setIpAddress(data.ip);
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  }, [url]);

  return (
    <span>
      <p>IP Address: {ipAddress}</p>
    </span>
  );
};

export default IpAPIFetch;
