import React, { Component } from 'react'
import {connect} from 'react-redux';
import axios from 'axios';

export class Dashboard extends Component {
  constructor(){
    super()

    this.state = {
      search: '', 
      toggle: true,
      title: '',
      content: '', 
      img: '',
      username: ''
    }
   
  }

  componentDidMount(){
    
    axios.get(`/api/posts/${this.props.userid}`).then( (res) => {
      const {title, content, img, username} = res.data[0];
      this.setState({
        title, 
        content, 
        img, 
        username
      })
      
      
    })
  }
  render() {
  
    return (
      <div>
        <input onChange={(e) => this.setState({search: e.target.value})}/>
        <p>My Posts</p>
        <input type='checkbox' onClick={() => this.setState({toggle: !this.state.toggle})}/>
        <br/>
        <button>Search</button>
        <button>Reset</button>
        <p>Title: {this.state.title} by {this.state.username}</p> 
        <img src={this.state.img}/>
        <p> {this.state.content}</p>
      </div>
    )
  }
}
function mapStateToProps(state){
  const {userid} = state
  
  return {
    userid
  }
}

export default connect(mapStateToProps)(Dashboard)