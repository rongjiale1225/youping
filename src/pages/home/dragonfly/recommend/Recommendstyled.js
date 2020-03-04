import styled from 'styled-components'

import recommend from 'assets/images/recommend.gif'
import back from 'assets/images/back.png'

const RecommendContainer = styled.div`
  width:100%;
  height:0.3rem;
  margin-top:0.05rem;
  background:#fff;
  display:flex;
  padding:0 0.15rem;
  .r-icon{
    width:0.25rem;
    height:100%;
    background: url(${recommend}) no-repeat left center;
    background-size: 0.13rem;
  }
  .r-btn{
    width:0.1rem;
    background: url(${back}) no-repeat right center;
    background-size: 0.07rem;
  }
  .r-main{
    flex:1;
    .my-carousel .v-item {
      height: 0.36rem;
      line-height: 0.36rem;
      padding-left: 0.1rem;
      color:#676B7B;
    }
  }
  
`

export {
  RecommendContainer
}