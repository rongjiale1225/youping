import styled from 'styled-components'

import border from 'components/stylesheet/border'

const FooterContainer = styled.div `
  width:100%;
  height:1.6rem;
  display:flex;
  justify-content:center;
  align-items:center;
  .fo-text{
    color:rgb(153, 153, 153);
    font-size:0.12rem;
    margin:0 0.1rem;
  }
`

const Line = styled.div `
  width:0.5rem;
`


const Borderedline = border({
  component:Line,
  width:'0 0 1px 0'
})



export {
  FooterContainer,
  Borderedline
}