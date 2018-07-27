import React, { Component } from 'react'

export default class Auth extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
  }
}

  render() {
    return (
      <div>
       <p>Username:</p> <input onChange={(e) => this.setState({username: e.target.value})}/>

        <p>Password </p><input onChange={(e) => this.setState({password: e.target.value})}/>
        
        <br/><br/>
        <button>Login</button>
        <button>Register</button>
      </div>
    )
  }
}
