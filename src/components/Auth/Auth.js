import React, { Component } from 'react'
import axios from 'axios';
import {withRouter} from 'react-router'
import {connect} from 'react-redux';
import {updateUser} from '../../ducks/reducer';

export class Auth extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
  }

}

  login = () => {
    const {username, password} = this.state
    axios.post('/api/auth/login', {username: username, password: password}).then( (res) => {
      const {username} = res.data[0]
      this.props.updateUser({username: username})

      this.props.history.push("/dashboard")
    })
  }

  register = () => {
    const {username, password} = this.state
    
  axios.post('/api/auth/register', {username: username, password: password }).then( () => {
    this.props.history.push("/dashboard")
  })
  }

  render() {
    return (
      <div>
       <p>Username:</p> <input onChange={(e) => this.setState({username: e.target.value})}/>

        <p>Password </p><input onChange={(e) => this.setState({password: e.target.value})}/>

        <br/><br/>
        <button onClick={this.login}>Login</button>
        <button onClick={() => this.register()}>Register</button>
      </div>
    )
  }
}

export default connect(null, {updateUser})(Auth)