import React from 'react';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

const App = () => {
  return (
    <div>
      <Banner />  
      <Exhibit title="Exhibit">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod similique perspiciatis hic id, facere magni maxime assumenda ab velit pariatur corporis a. Tempora recusandae sed dolorum? Aspernatur, dolores rem?.</p>
      </Exhibit>
        
    </div>
  );
};

export default App;
