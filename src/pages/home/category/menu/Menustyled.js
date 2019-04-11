import styled from 'styled-components'

import border from 'components/stylesheet/border'

const MenuContainer = styled.div `
  width:100%;
  height:5.8rem;
  display:flex;
  background:#fff;
  .left-menu{
    width:0.75rem;
    padding-top:0.13rem;
  }
  .right-menu{
    flex:1;
  }
`

const LeftMenu = styled.div `
  width:0.75rem;
  padding-top:0.13rem;
  .left-container{
    width:100%;
    height:5.9rem;
    overflow-y:scroll;
    ul{
      width: 100%;
      li{
        height:0.24rem;
        color: rgb(51, 51, 51);
        font-weight: 300;
        font-size:0.12rem;
        text-align:center;
        line-height:0.24rem;
        margin-bottom:0.25rem;
      }
    }
  }
  
`
const BorderedLeftMenu = border({
  component:LeftMenu,
  width:'0 1px 0 0'
})

export {
  MenuContainer,
  LeftMenu,
  BorderedLeftMenu
}