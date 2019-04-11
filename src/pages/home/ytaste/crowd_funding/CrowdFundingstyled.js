import styled from 'styled-components'

const CrowdFundingContainer = styled.div `
  width: 100%;
  height: 3.74rem;
  margin-top: 0.1rem;
  background: #fff;
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
  .crowd-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .crowd-item{
    background-color: rgb(249, 243, 233);
    width: 3.55rem;
    height: 1.49rem;
    .c-item-top{
      width: 100%;
      height: 1.24rem;
      padding: 0 0.13rem;
      display: flex;
      .c-item-content{
        width: 1.89rem;
        height: 1.2rem;
        h3{
          font-size: 16px;
          margin-top: 15px;
          color: rgb(51, 51, 51);
          font-weight: 550;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        }
        p{
          font-size:0.12rem;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          color: rgb(153, 153, 153);
          margin: 0.03rem 0rem 0.1rem 0rem;
        }
        div{
          font-size: 0.1rem;
          color:rgb(182, 9, 9);
          span{
            color:rgb(182, 9, 9);
            font-size:0.15rem;
          }
        }
      }
      .c-img-container{
        width: 1.19rem;
        height: 1.19rem;
        margin-top: 0.1rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .c-item-bottom{
      .c-bottom-content{
        height: 0.2rem;
        padding: 0rem 0.15rem 0.08rem 0.15rem;
        display: flex;
        span{
          font-size: 0.12rem;
        }
        & span:nth-child(1){
          color:rgb(182, 9, 9);
        }
        & span:nth-child(2){
          color: rgb(153, 153, 153);
        }
        /* & span:nth-child(3){
         width: 0.14rem;
         height: 0.11rem;
         display: inline-block;
         color:#fff;
         margin-left:0.06rem;
         padding: 0 0.01rem;
        } */
        & span:nth-child(3){
          color:rgb(182, 9, 9);
          float:right;
        }
        
      }
      .c-bottom-color{
        height:0.04rem;
        background-color: rgb(225, 225, 225);
        .c-color{
          height:0.04rem;
          background-image: linear-gradient(to right, rgb(249, 196, 6), rgb(243, 117, 17));
        }
      }
    }
  }
  .c-item-container{
    width:3.55rem;
    height:1.58rem;
    background: #fff;
    display:flex;
    & div:first-child{
      margin-right:0.05rem;
    }
    .c-item{
      width:1.76rem;
      height:1.58rem;
      background-color: rgb(248, 248, 248);
      .c-container{
        width:1.55rem;
        height:1.34rem;
        padding:0rem 0.08rem 0rem 0.13rem;
        h3{
          font-size:0.15rem;
          margin-top:0.08rem;
          color:rgb(51, 51, 51);
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        }
        div{
          width:1.55rem;
          height:1rem;
          display:flex;
          span{
            width:.52rem;
            height:0.2rem;
            margin-top:0.15rem;
            color:rgb(182, 9, 9);
          }
          .img-box{
            flex:1;
            justify-content:end;
            margin-top:0.1rem;
            img{
              width:0.9rem;
              height: 0.9rem;
            }
          }
        }
      }
      .c-bottom{
        height:0.24rem;
        .c-bottom-text{
        height: 0.2rem;
        padding: 0rem 0.15rem 0.08rem 0.15rem;
        span{
          font-size: 0.12rem;
        }
        & span:nth-child(1){
          color: rgb(153, 153, 153);
        }
        & span:nth-child(2){
         width: 0.14rem;
         height: 0.11rem;
         display: inline-block;
         color:#fff;
         margin-left:0.06rem;
         padding: 0 0.01rem;
        }
        & span:nth-child(3){
          color:rgb(182, 9, 9);
          float:right;
        }
      }
      .c-bottom-color{
        height:0.04rem;
        background-color: rgb(225, 225, 225);
        .c-color{
          height:0.04rem;
          background-image: linear-gradient(to right, rgb(249, 196, 6), rgb(243, 117, 17));
        }
      }
      }
    }
  }
  }
  
`

export {
  CrowdFundingContainer
}