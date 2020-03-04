import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'

import {ItemContainer} from './Itemstyled'

class ItemUI extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return ( 
    <ItemContainer>
      <div className='i-header'>
        <div className='i-title'>{this.props.recommends.category.name}</div>
        <div className='i-padding'></div>
        <div 
        onClick={() => {this.handleClick(this.props.recommends.category.id)}}
        className='i-back'
        ></div>
      </div>
      <div className='i-item-container'>
        {
          this.props.recommends.recommends.map(value => {
            return(
                <div 
                className='i-item'
                key={value.programId + value.channelId }
                >
                  <img src={value.img} alt="" />
                  <div className='i-text'>{ value.desc }</div>
                </div>
            )
          })
        }
      </div>
    </ItemContainer>
   )
 }
  handleClick(id) {
    this.props.history.push(`/category?${id}`)
  }
}
 
export default withRouter(ItemUI)