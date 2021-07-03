import React from 'react'
import { FolderAddOutlined, ImportOutlined } from '@ant-design/icons'
import FileSearch from './components/FileSearch'
import FileList from './components/FileList'
import defaultFiles from './utils/defaultFiles'
import BottomBtn from './components/BottomBtn'

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
          <div className="row row-no-gutters no-padding">
            <div className="col no-padding">
              <BottomBtn 
                icon={<FolderAddOutlined />}
                text='新建'
                onBtnClick={() => {console.log('add')}}
                colorClass='btn-primary'
              />
            </div>
            <div className="col no-padding">
              <BottomBtn 
                icon={<ImportOutlined />}
                text='导入'
                onBtnClick={() => {console.log('import')}}
                colorClass='btn-success'
              />
            </div>
          </div>
        </div>
        <div className="col-9 bg-primary right-panel">
          <h1>this is the right </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
