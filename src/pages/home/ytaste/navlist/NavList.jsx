import React, { Component } from 'react';

import { connect } from 'react-redux'

import { NavListContainer } from './NavListstyled'

const mapState = state => ({
  homepage: state.homepage.homepage
})

// const mapDispatch = dispatch => ({
//   fetchData(){
//     dispatch( getHomepageAsync() )
//   }
// })

class NavList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     list:[]
  //    }
  // }
  render() { 
    return ( 
      <NavListContainer>
        {
          this.props.homepage[1] ?(
            <ul>
            {
              this.props.homepage[1].data.items.map(val => (
                <li
                key={ val.iid }
                >
                  <img src={val.item.pic_url} alt=""/>
                  <span>{ val.item.title }</span>
                </li>
              ))
            }
          </ul>
          ):
          (null)
        }
        
      </NavListContainer>
     )
  }
}
 
export default connect(mapState)(NavList);