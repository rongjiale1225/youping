import React, { Component } from 'react'

import { connect } from 'react-redux'

import { 
  getHomepageAsync
} from 'pages/home/actionCreator'

import {CateGoryPageContainer} from './CateGoryPagestyled'

import TapBar from 'components/top_bar/TopBar'
import CateGory from 'components/category/CateGory'
import Swiper from 'components/swiper/Swiper'
import Citem from '../category-item/Citem'
import Attribute from '../attribute/Attribute'
import BillBoard from '../billboard/BillBoard'
import Section from '../section/Section'


import http from 'utils/fetch'

const mapDispatch = dispatch => ({
  fetchData() {
    dispatch(getHomepageAsync())
  }
})

class CateGoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dataSource:{}
     }
    this.fetchData()
  }
  async componentDidMount() {
    let id = this.props.location.search.split('?')[1]
    let data = await this.getData(id)
    this.setState({
      dataSource:data
    })
  }

  async componentWillReceiveProps(newProps) {
    let id = newProps.location.search.split('?')[1]
    let data = await this.getData(id)
    this.setState({
      dataSource:data
    })
  }

  render() {
    return ( 
      <CateGoryPageContainer>
        <div className='container'>
          <TapBar />
          <CateGory />
          {
            this.state.dataSource.banners ? (
              <Swiper banner={this.state.dataSource.banners}  />
            ):
            (null)
          }
          {
            this.state.dataSource.channels ? (
              <Citem channel={this.state.dataSource.channels} />
            ):
            (null)
          }
          {
            this.state.dataSource.attributes ? (
              <Attribute attribute={this.state.dataSource.attributes} />
            ):
            (null)
          }
          {
            this.state.dataSource.billboards ? (
              <BillBoard billboard={this.state.dataSource.billboards}/>
            ):
            (null)
          }
          {
            this.state.dataSource.sections ? (
              <>
                {
                  this.state.dataSource.sections.map(val => (
                    <Section 
                    key={val.attr.id+val.attr.name}
                    section={val}
                     />
                  )) 
                }
              </>
            ):
            (null)
          }
        </div>
      </CateGoryPageContainer>
     )
  }
  fetchData() {
    this.props.fetchData()
  }

   getData(id) {
    if(id === '5') {
      let result = http.get(`/api/mobile/radio`)
      return result
    } 
    if(id !== '5') {
      let result = http.get(`api/mobile/categories/${ id }`)
      return result
    }
  }
}
 
export default connect(null,mapDispatch)(CateGoryPage);