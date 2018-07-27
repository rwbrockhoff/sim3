import React from 'react'
import routes from '../../routes';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import "./Nav.css";
export function Nav(props){
  
  if (window.location.hash === "#/"){
    return (
      null
    )
  }
  else {
    return (
      <div>
        <img src={props.profilepic} alt="profile"/> 
        <p> Username: {props.username}</p> 
        <Link to="/dashboard"><button> Home </button></Link>
        <Link to="/new"><button> New Post </button></Link>
        <Link to="/auth"><button> Logout </button></Link>
      </div>
    )
  }
}

function mapStateToProps(state){
let {username, profilepic} = state


  return {
    username,
    profilepic
  }
}

export default connect(mapStateToProps)(Nav);