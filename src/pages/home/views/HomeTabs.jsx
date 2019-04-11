import React, { Component } from 'react'

import { TabBar } from 'antd-mobile'

import Ytaste from '../ytaste/Ytaste'
import CateGory from 'pages/home/category/views/CateGory'


import tabBar from 'assets/images/tab-bar.png'


class HomeTabs extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
     }
  }
  render() { 
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: '100%' }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="rgb(132, 95, 63)"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '24px',
              height: '24px',
              background: `url(${tabBar}) center center /  21px 21px no-repeat` ,
              backgroundPosition: '0 0% ',
              backgroundSize: '100%'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '24px',
              height: '24px',
              background: `url(${tabBar}) 0 11.111111% /  100% no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            data-seed="logId"
          >
            <Ytaste></Ytaste>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${ tabBar }) 0 22.22222% /  100% no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url( ${ tabBar } ) 0 33.333333% /  100% no-repeat` }}
              />
            }
            title="分类"
            key="category"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <CateGory />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${tabBar}) 0 44.4444% /  100% no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${tabBar}) 0 55.5555% /  100% no-repeat` }}
              />
            }
            title="品味"
            key="taste"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <div>taste</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${tabBar}) 0 66.6666% /  100% no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${tabBar}) 0 77.7777%/  100% no-repeat` }}
              />
            }
            title="购物车"
            key="shopcar"
            selected={this.state.selectedTab === 'pinkTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'pinkTab',
              });
            }}
          >
            <div>friend</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${tabBar}) 0 88.8888% /  100% no-repeat` }}
              />
          }
            selectedIcon={
              <div style={{
                width: '24px',
                height: '24px',
                background: `url(${tabBar}) 0 100%/  100% no-repeat` }}
              />
          }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <div>my</div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
 
export default HomeTabs;