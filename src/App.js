import React, { useState, useEffect } from 'react';
import FbPost from './Components/FbPost/index';

function App() {
  let [postObj, setPostObj] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        setPostObj(res.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!postObj || postObj.length === 0) {
    return (
      <div id="loader">
        <div className="loader"></div>
      </div>
    );
  }

  return (
  
    <div className="App">
      <div className='container'>
        {postObj.map(element => (
          <FbPost key={element.id} postObj={element} />
        ))}
      </div>
    </div>
  );
}

export default App;
