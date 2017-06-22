import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Home from './home/home';
import Project from './project/project';
import './App.css';

class App extends Component {
  render() {
    injectTapEventPlugin();
    const muiTheme = getMuiTheme({
      appBar: {
        height: 50,
        backgroundColor: 'rgb(255, 255, 255)'
      },
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <div className="App">
            <Route exact path='/' component={Home} />
            <Route path='/project/:projectName' component={Project} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
