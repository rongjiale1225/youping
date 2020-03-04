import styled from 'styled-components'

import back from 'assets/images/iback.png'

const ItemContainer = styled.div`
  width:100%;
  height:1.96rem;
  background:#fff;
  padding: 0.1rem .15rem;
  margin-bottom: 0.05rem;
  .i-header{
    width:100%;
    height:0.23rem;
    display:flex;
    .i-title{
      height:100%;
      color:#3D3D3D;
      font-size:0.17rem;
    }
    .i-padding{
      flex:1;
    }
    .i-back{
      width:0.35rem;
      height:100%;
      background: url(${back}) no-repeat center;
      background-size: 35px;
    }
  }
  .i-item-container{
    width:100%;
    height:1.51rem;
    display:flex;
    justify-content: space-between;
    .i-item{
      width:0.95rem;
      height:1.31rem;
      padding:0.1rem 0;
      img{
        width:100%;
      }
      .i-text{
        margin-top: 0.02rem;
        width: .95rem;
        font-size: .12rem;
        max-height: 0.35rem;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
      }
    }
  }
`

export {
  ItemContainer
}