import React, { Component } from 'react'

import { 
  BorderedCateGoryHeaderContainer 
} from './CateGoryHeaderstyled'

class CateGoryHeader extends Component {
  render(){
    return(
      <BorderedCateGoryHeaderContainer>
        <div className='cg-header'>
          <div className='cg-search'>
            <span>米粉节优惠倒计时</span>
          </div>
        </div>
      </BorderedCateGoryHeaderContainer>
    )
  }
}

export default CateGoryHeader;