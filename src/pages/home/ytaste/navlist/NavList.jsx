import React, { Component } from 'react';

import { connect } from 'react-redux'

import NavListUI from './NavListUI'

const mapState = state => ({
  homepage: state.homepage.homepage
})


class NavList extends Component {
  render() { 
    let kingKong = this.props.homepage.find(item => (item.module_key === 'kingkong'))
    return ( 
      <NavListUI navList={kingKong || []} />
     )
  }
}
 
export default connect(mapState)(NavList);