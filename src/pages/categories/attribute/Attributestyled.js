import styled from 'styled-components'

import border from 'components/stylesheet/border'

const AttributeContainer = styled.div `
  width:100%;
  height:0.5rem;
  background:#fff;
  padding:0 0.15rem;
  margin-bottom: 0.05rem;
  .a-row{
    width:100%;
    padding:0.1rem 0;
    height:100%;
    display:flex;
    .a-more{
      width:25%;
      display:flex;
      justify-content:center;
      align-items:center;
      color: #E13430;
      font-size: 13px;
    }
  }
`
const Aitem = styled.div `
  width:25%;
  height:100%;
  font-size: 13px;
  color:#676B7B;
  display:flex;
  justify-content:center;
  align-items:center;
`
const BorderdAitem = border({
  component:Aitem,
  width:'0 1px 0 0'
})

export {
  AttributeContainer,
  Aitem,
  BorderdAitem
}