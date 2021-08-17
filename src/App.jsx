// @ts-check
import React from 'react';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="bg"></div>
        <div class="area">
            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div className="center">
            <h1 style={{'font-family': 'Ginto Normal'}}>This is test</h1>
        </div>
      </div>
    );
  }
}