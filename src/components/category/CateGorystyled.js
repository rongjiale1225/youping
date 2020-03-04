import styled from 'styled-components'

import switchBtn from 'assets/images/switch-btn-bottom.png'

const CateGoryContainer = styled.div`
  width:100%;
  height:0.45rem;
  background:#fff;
  display:flex;
  .expanded{
    top: 45px;
    left: 0;
    right: 0;
    overflow: inherit;
    white-space: inherit;
    border-bottom: 1px solid #DCDEE3;
  }
  .nav-container{
    flex:1;
    overflow-x:scroll;
    overflow-y:hidden;
    .nav-wrapper{
      height:0.4rem;
      white-space:nowrap;
      transition-duration: 0.4s;
      .nav-item{
        height:100%;
        display:inline-block;
        span{
          display:inline-block;
          padding: 0.1rem 0.06rem;
          margin: 0 0.06rem;
          color: #676B7B
        }
      }
    }
  }
  .switch-btn{
    width:0.65rem;
    height:100%;
    /* background: url(${switchBtn}) no-repeat 15px center; */
    background-repeat:no-repeat;
    background-position: 0.15rem center;
    background-size: 0.35rem;
  }
  
`

export {
  CateGoryContainer
}