import styled from 'styled-components'

import back from 'assets/images/iback.png'

const SectionContainer = styled.div `
  background-color: #FFF;
  position: relative;
  padding: .10rem .15rem;
  margin-bottom:0.05rem;
  .s-header{
      width:100%;
      height:0.23rem;
      display:flex;
    .s-title{
      height:100%;
      color:#3D3D3D;
      font-size:0.17rem;  
    }
    .s-padding{
      flex:1;
    }
    .s-back{
      width:0.35rem;
      height:100%;
      background: url(${back}) no-repeat center;
      background-size: 35px;
    }
  }
  .s-container{
    width:100%;
    .s-item{
      position: relative;
      height: .95rem;
      padding: .12rem 0 .13rem .85rem;
      .image{
        position: absolute;
        top: .12rem;
        left: 0;
        width: .70rem;
        height: .70rem;
      }
      .s-title{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #3D3D3D;
        font-size: 17px;
      }
      .s-content{
        color: #676B7B;
        margin-top: 2px;
        width: 100%;
        font-size: 12px;
        max-height: 2.85714286em;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
      }
      .s-star{
        width:100%;
        padding: 4px 0 3px 0;
        img{
          width:0.13rem;
          height:0.13rem;
        }
        
      }
    }
  }
`
export {
  SectionContainer
}