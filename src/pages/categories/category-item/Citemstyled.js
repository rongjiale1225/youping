import styled from 'styled-components'

import border from 'components/stylesheet/border'
import back from 'assets/images/iback.png'

const CitemContainer = styled.div`
  background-color: #FFF;
  padding: 0 .10rem;
  margin-bottom: 0.05rem;
    .c-header{
      width:100%;
      height:0.23rem;
      display:flex;
    .c-title{
      height:100%;
      color:#3D3D3D;
      font-size:0.17rem;  
    }
    .c-padding{
      flex:1;
    }
    .c-back{
      width:0.35rem;
      height:100%;
      background: url(${back}) no-repeat center;
      background-size: 35px;
    }
  }
  .c-list{
    width:100%;
    background-color: #FFF;
  }
`

const ListItem = styled.div `
  position:relative;
  height: .96rem;
  padding: .12rem 0.05rem .13rem .85rem;
  border-bottom: 0.01rem solid #eaecef;
  .c-img{
    position:absolute;
    top: 0.12rem;
    left: 0.05rem;
    width:0.7rem;
    height:0.7rem;
    background-size: 70px 70px;
  }
  .c-title{
    line-height: 30px;
    color: #3D3D3D;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .c-content{
    color: #676B7B;
    box-sizing: content-box;
    font-size: 13px;
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    font-family: "Helvetica Neue", "Nimbus Sans L", "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
}
`

const BorderdListItem = border({
  component:ListItem,
  color:'#eaecef',
  width:'0 0 1px 0'
})

export {
  CitemContainer,
  ListItem,
  BorderdListItem
}