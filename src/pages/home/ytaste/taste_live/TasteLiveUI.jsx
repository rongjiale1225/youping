import React from 'react'

import {TasteLiveContainer} from './TasteLivestyled'

export default props => {
  return(
    <TasteLiveContainer> 
      <h1>
        <div>
          品味生活
        </div>
        <span>更多</span>
      </h1>
      {
        props.tasteData.data ? (
          <div className='t-container'>
            <div className='t-item-container'>
            {
              props.tasteData.data.items.map(val => {
                return(
                  <div 
                  className='t-item'
                  key={val.iid}
                  >
                    <div className='t-item-img'>
                      <img src={ val.item.pic_url } alt='' />
                    </div>
                    <div className='t-item-content'>
                      <div>
                        {val.item.title}
                      </div>
                      <div>
                        { val.item.summary }
                      </div>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>
        ) :
        (null)
      }
    </TasteLiveContainer>
  )
}