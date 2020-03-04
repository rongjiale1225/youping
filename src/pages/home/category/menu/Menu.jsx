import React, { Component } from 'react'

import MenuUI from './MenuUI'

import http from 'utils/fetch'

class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      list:null
    }
  } 
  render() { 
    return ( 
      <MenuUI categoryList={this.state.list}></MenuUI>
     )
  }
  async componentDidMount(){ 
    const data = await http.get('/api/list')
    this.setState({
      list:data
    })
  }
}
 
export default Menu;