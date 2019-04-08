import React from 'react';
import { HeaderContainer } from './Headerstyled'
import logo from 'assets/images/YP-logo.png'
import message from 'assets/images/YP-message.png'
import search from 'assets/images/search.png'

const Header = () => {
  return ( 
    <HeaderContainer>
      <div className='logo'>
        <img className='taste' src={ logo } alt=''/>
      </div>
      <div className='searchContainer'>
        <div className='search'>
          <img src={ search } alt=""/>
          <span className='search-content'>神券限量抢 优惠一站购</span>
        </div>
      </div>
      <div className='message'>
        <img src={ message } alt=""/>
      </div>
    </HeaderContainer>
  )
}
 
export default Header;