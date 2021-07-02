import React from 'react';
import FileSearch from './components/FileSearch'

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container-fluid" >
      <div className="row">
        <div className="col-3 bg-light left-panel">
          <FileSearch 
            title='我的云文档'
            onFileSearch={(value) => {console.log(value)}}
          />
        </div>
        <div className="col-9 bg-primary right-panel">
          <hi>this is the right </hi>
        </div>
      </div>
    </div>
  );
}

export default App;
