import React,{Component} from 'react'

import PoProductHotUI from './ProductHotUI'

import { connect } from 'react-redux'

const mapState = state => ({
  homepage:state.homepage.homepage
})

class ProductHot extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    let productHot = this.props.homepage.filter(item => (item.module_key === 'product_hot'))
    return(
      <PoProductHotUI 
      hotData={ 
        (this.props.sign === 'top' ? productHot[0] : productHot[1]) || [] 
      } 
      />
    )
  }
}

export default connect(mapState)(ProductHot)