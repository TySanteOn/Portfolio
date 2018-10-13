import React, { Component } from 'react';
import Header from './Header.jsx';
import Homepage from './Homepage.jsx';

// import { Route, Switch } from "react-router-dom";

class App extends Component {

  render() {
    const {works} = this.props
    return (
      <div className="row">
        <Header />
        <main>
            <Homepage works={works} />
        </main>
      </div>
    );
  }
}

export default App;
