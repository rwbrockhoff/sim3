import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import {Link} from 'react-router-dom';
import routes from './routes';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <Nav/>
        <Link to="/"> Auth </Link>
        <Link to="/dashboard"> Dashboard </Link>
        <Link to="/new"> Form </Link>
        <Link to="/post/:postid"> Post </Link>
       {routes}
      </div>
    );
  }
}

export default App;
