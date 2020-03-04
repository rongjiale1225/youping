import React, { Component } from 'react'

import { connect } from 'react-redux'

import { 
  getHomepageAsync
} from 'pages/home/actionCreator'

import CateGoryUI from './CateGoryUI'

const mapState = state => ({
  homepage:state.homepage.homepage
})

const mapDispatch = dispatch => ({
  fetchData() {
    dispatch(getHomepageAsync())
  }
})

class CateGory extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let categories = this.props.homepage.categories 
    return ( 
      <CateGoryUI categoriesData={categories || []} ></CateGoryUI>
     )
  }

  fetchData() {
    console.log(0)
    this.props.fetchData()
  }
}
 
export default connect(mapState,mapDispatch)(CateGory);