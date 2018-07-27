import React from 'react'
import routes from '../../routes';
import {Link} from 'react-router-dom';

export default () => {
  
  if (window.location.hash === "#/"){
    return (
      null
    )
  }
  else {
    return (
      <div>
        <Link to="/dashboard"><button> Home </button></Link>
        <Link to="/new"><button> New Post </button></Link>
        <Link to="/auth"><button> Logout </button></Link>
      </div>
    )
  }
}

