import React, { Component } from 'react'

import SectionUI from './SectionUI'

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <SectionUI section={this.props.section} />
    )
  }
}
 
export default Section