import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I'm the VERY VERY BEST home component</div>
      <button onClick={()=> console.log('Hi here')}>Press me!</button>
    </div>
  );
};

export default Home;