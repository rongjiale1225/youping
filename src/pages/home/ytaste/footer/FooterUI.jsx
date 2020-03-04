import React, { Component } from 'react'

import { 
  FooterContainer,
  Borderedline
} from './Footerstyled'

class FooterUI extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <FooterContainer>
      <Borderedline></Borderedline>
      <div className='fo-text'>
        更多好物，敬请期待
      </div>
      <Borderedline></Borderedline>
    </FooterContainer> 
    )

  }
}
 
export default FooterUI;
