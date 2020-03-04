import React from 'react'

import {BillBoardContainer} from './Billboardstyled'

export default props => {
  return(
    <BillBoardContainer>
      <div className='b-header'>
        热门排行榜
      </div>
      <div className='b-main'>
        <div 
        className='b-img'
        style={{backgroundImage:`url(${props.billboard[0].img})`}}
        >
        </div>
        {
          props.billboard.map((val,index) => (
            <div 
            key={val.channelId+val.title}
            className='b-item'
            >
              <span>{index+1}&nbsp;.</span>
              {val.title}
            </div>
          ))
        }
        <div className='b-more'></div>
      </div>
    </BillBoardContainer>
  )
}