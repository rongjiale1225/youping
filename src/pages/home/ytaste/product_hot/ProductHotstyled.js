import styled from 'styled-components'

const ProductHotContainer = styled.div `
  width:100%;
  height:4.26rem;
  background:#fff;
  .p-container{
    width:100%;
    height:100%;
    ul{
      display:flex;
      flex-wrap:wrap;
      li{
        width:1.25rem;
        height:1.99rem;
        .p-item{
          width:1.13rem;
          height:1.89rem;
          margin: 0.08rem 0rem 0.02rem 0.1rem;
          .p-img{
            height:1.21rem;
            background:  rgb(248, 248, 248);
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            .p-img-item{
              width:0.86rem;
              height:0.86rem;
              img{
                width:100%;
              }
            }
            .p-img-tags{
              height:0.15rem;
              width:100%;
              span{
                width:0.24rem;
                height:0.16rem;
                color:#fff;
                font-size:0.09rem;
                margin: 0rem 0.04rem;
              }
            }
          }
          .p-content{
            height:0.6rem;
            margin-top:0.12rem;
            div{
              margin-top:0.05rem;
              color:rgb(182, 9, 9);
            }
          }
        }
      }
    }
  }
`

export {
  ProductHotContainer
}