import React, { Component } from 'react';

import {withRouter} from 'react-router-dom'

import switchBtnB from 'assets/images/switch-btn-bottom.png'
import switchBtnT from 'assets/images/switch-btn-top.png'

import { CateGoryContainer } from './CateGorystyled'
class CateGoryUI extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      boor:false
     }
    this.handleClick = this.handleClick.bind(this)
    this.switchHandeler = this.switchHandeler.bind(this)
  }
  render() { 
    return ( 
      <CateGoryContainer>
      <div className='nav-container'>
        <div 
        className={this.state.boor ? 'expanded nav-wrapper' : 'nav-wrapper'}
        >
          {
          this.props.categoriesData ? (
            <>
            {
              this.props.categoriesData.map(val => (
                <div 
                className='nav-item'
                key={val.id}
                onClick={() => (this.handleClick(val.id,val.name))}
                >
                <span> {val.name}</span>
                </div>
              )) 
            } 
            </>
          ):
          (null)
        } 
        </div>
      </div>
      <div 
      className='switch-btn'
      onClick={this.switchHandeler}
      style={{backgroundImage:`url( ${this.state.boor ? switchBtnT :switchBtnB })`}}
      ></div>
      <div></div>
    </CateGoryContainer>
     );
  }
  handleClick(id,name){
    if(name === '精选'){
      this.props.history.push('/')
    }else{
      this.props.history.push(`/category?${id}`)
    }
  }
  switchHandeler(){
    this.setState({
      boor:!this.state.boor
    })
  }
}
 
export default withRouter(CateGoryUI) ;

// const CateGoryUI = (props) => {
//   return ( 
//     <CateGoryContainer>
//       <div className='nav-container'>
//         <div className='nav-wrapper'>
//           {
//           props.categoriesData ? (
//             <>
//             {
//               props.categoriesData.map(val => (
//                 <div 
//                 className='nav-item'
//                 key={val.id}
//                 >
//                 <span> {val.name}</span>
//                 </div>
//               )) 
//             } 
//             </>
//           ):
//           (null)
//         } 
//         </div>
//       </div>
//       <div className='switch-btn'></div>
//     </CateGoryContainer>
//    )
// }
 
// export default CateGoryUI;