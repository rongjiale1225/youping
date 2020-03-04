import React, { Component } from 'react'


import TopBar from 'components/top_bar/TopBar'

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.play = this.play.bind(this)
  }
  render() { 
    return ( 
      <div>
        <TopBar></TopBar>
        <button onClick={this.play}>play</button>
        <video controls="" autoplay="" name="media"><source src="http://localhost:3000/m4a/5cb6eaa57cb8915df8dfdb36_12340067_24.m4a?sign=2bbea7a0a99de960bc333ea85d774db7&amp;t=5cb7d97c" type="audio/mpeg" /></video>
      </div>
     )
  }
  async componentDidMount() {
    const url = '/m4a/5cb6eaa57cb8915df8dfdb36_12340067_24.m4a?sign=2bbea7a0a99de960bc333ea85d774db7&t=5cb7d97c'
    fetch(url)
    .then(result => {
      console.log(result) 
    })
  }
  play() {
    
  }
}
 
export default Play;