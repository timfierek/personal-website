import React from 'react';
import './App.css';
import Landing from './components/Landing';
import { JsxElement } from 'typescript';

function App() {
  const [curPage, setCurPage] = React.useState(<Landing />);

  function changePage(newPage: any) {
    setCurPage(newPage);
  }

  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
