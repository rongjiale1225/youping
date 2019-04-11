import Styled from 'styled-components'

import searchbg from 'assets/images/search.png'

import border from 'components/stylesheet/border'

const CateGoryHeaderContainer  = Styled.div `
  width:100%;
  height:0.45rem;
  background:#fff;
  display:flex;
  .cg-header{
    flex:1;
    padding:0 0.12rem;
    display:flex;
    align-items:center;
    .cg-search{
      width:100%;
      height:0.27rem;
      background:url(${searchbg}) no-repeat 0.1rem center rgb(239, 239, 240);
      background-size:0.17rem;
      padding-left:0.3rem;
      display:flex;
      align-items:center;
      span{
        font-size:0.12rem;
        color: rgb(204, 204, 204);
      }
    }
  }
`
const BorderedCateGoryHeaderContainer = border({
  component:CateGoryHeaderContainer,
  width:'0 0 1px 0'
})
export {
  CateGoryHeaderContainer,
  BorderedCateGoryHeaderContainer 
}