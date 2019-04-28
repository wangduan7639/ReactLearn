import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/header";

function App() {
  return (
    <div className="App">
      <Header name={"headername"}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
            My name is WD 下面是我的GitHub地址链接
        </p>
        <a
         className="My-GitHub"
         href={"https://github.com/wangduan7639"}
         target={"_blank"}
         rel={"noopener noreferrer"}
        >
          Go My GitHub
        </a>

      </header>
    </div>
  );
}

export default App;
