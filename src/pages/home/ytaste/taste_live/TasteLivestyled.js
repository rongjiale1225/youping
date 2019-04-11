import styled from 'styled-components'

const TasteLiveContainer = styled.div `
  width:100%;
  height:2.38rem;
  background:#fff;
  h1{
    height: 0.43rem;
    background: #fff;
    display: flex;
    align-items: center;
    font-size:0.1rem;
    div{
      flex: 1;
      padding: 0.15rem;
    }
    span{
      width: 0.55rem;
      color: rgb(153, 153, 153);
    }
  }
  .t-container{
    width:100%;
    height:1.85rem;
    overflow-x:scroll;
    overflow-y:hidden;
    padding-left:0.1rem;
    .t-item-container{
      height:1.7rem;
      white-space:nowrap;
      .t-item{
        width:2.50rem;
        height:1.70rem;
        margin-right:0.05rem;
        display:inline-block;
        .t-item-img{
          width:100%;
          height:1.25rem;
          img{
            width:100%;
          }
        }
        .t-item-content{
          width:100%;
          height:0.4rem;
          & div:nth-of-type(1){
            width:100%;
            height:0.21rem;
            overflow:hidden;
            text-overflow:ellipsis;
            padding-top:0.02rem;
          }
          & div:nth-of-type(2){
            width:100%;
            height:0.16rem;
            overflow:hidden;
            text-overflow:ellipsis;
            padding-top:0.02rem;
            color: rgb(153, 153, 153);
            font-size:0.12rem;
          }
        }
      }
    }
  }
`

export {
  TasteLiveContainer
}