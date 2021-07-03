import React from 'react';
import FileSearch from './components/FileSearch'
import FileList from './components/FileList'
import defaultFiles from './utils/defaultFiles'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container-fluid" >
      <div className="row">
        <div className="col-3 bg-light left-panel">
          <FileSearch 
            onFileSearch={(value) => {console.log(value)}}
          />
          <FileList 
            files={defaultFiles}
            onFileClick={id => console.log(id)}
            OnFileDelete={id => console.log(`delete ${id}`)}
            onSaveEdit={(id, newVal) => {console.log(id); console.log(newVal)}}
          />
        </div>
        <div className="col-9 bg-primary right-panel">
          <h1>this is the right </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
