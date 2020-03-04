import React from 'react'

import {
  MenuContainer,
  BorderedLeftMenu
} from './Menustyled'

const MenuUI = (props) => {
  console.log(props.categoryList)
  return ( 
    <MenuContainer>
      <BorderedLeftMenu>
        <div className='left-container'>
          <ul>
            {
              props.categoryList ? (
                <>
                {
                  props.categoryList.data.map(val => (
                    <li
                    key={val.ucid}
                    >{ val.name }</li>
                  ))
                }
                </>
              ):
              (null)  
            }
          </ul>
        </div>
      </BorderedLeftMenu>
      <div className='right-menu'>

      </div>
    </MenuContainer>
   )
}
 
export default MenuUI;