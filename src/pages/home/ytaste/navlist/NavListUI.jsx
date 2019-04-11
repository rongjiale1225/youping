import React from 'react'

import { NavListContainer } from './NavListstyled'

export default props => {
  return(
    <NavListContainer>
      {
        props.navList.data ?(
          <ul>
          {
            props.navList.data.items.map(val => (
              <li
              key={ val.iid }
              >
                <img src={val.item.pic_url} alt=""/>
                <span>{ val.item.title }</span>
              </li>
            ))
          }
        </ul>
        ):
        (null)
        }
    </NavListContainer>
  )
}