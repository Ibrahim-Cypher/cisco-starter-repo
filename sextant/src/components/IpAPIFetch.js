import React, { useState, useEffect } from 'react';

const IpAPIFetch = ({ url, type}) => {
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
      <p> {type}: {ipAddress}</p>
    </span>
  );
};

export default IpAPIFetch;
