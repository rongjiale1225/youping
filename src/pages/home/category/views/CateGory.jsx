import React, { Component } from 'react'

import { CateGoryContainer } from './CateGorystyled'

import Header from '../header/CateGoryHeader'
import Menu from '../menu/Menu'

class CateGory extends Component {
  render(){
    return(
      <CateGoryContainer>
        <Header></Header>
        <main>
          <Menu></Menu>
        </main>
      </CateGoryContainer>
    )
  }
}
export default CateGory