import styled from 'styled-components'

const FlashSaleContainer = styled.div `
  width:100%;
  height: 2.32rem;
  background:#fff;
  margin:0.1rem 0rem;
  .f-container{
    width: 100%;
    height:2.12rem;
    padding-bottom: 0.1rem;
    margin-bottom:0.1rem;
    .header{
      width:100%;
      height:0.43rem;
      display:flex;
      & div:nth-of-type(1){
        width:0.5rem;
        height:100%;
        display:flex;
        justify-content:flex-end;
        align-items:center;
        span{
          font-size:0.12rem;
        }
      }
      & div:nth-of-type(2){
        flex:1;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        padding-left:0.05rem;
       img{
         width:0.12rem;
         height:0.12rem
       }
       span{
         font-size:0.14rem;
         color:rgb(169, 33, 18);
       }
       .tiem-container{
         display:inline-block;
         height:0.16rem;
         flex:1;
         display:flex;
         align-items:center;
         justify-content:flex-start;
         span{
           width:0.14rem;
           height:0.16rem;
           display:inline-block;
           margin:0rem 0.025rem;
           background:rgb(169, 33, 18);
           border-radius:0.02rem;
           color:#fff;
           font-size:0.12rem;
         }
       }
      }
      & div:nth-of-type(3){
        width:0.55rem;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        padding-right:0.1rem;
        span{
          font-size:0.12rem;
          color:rgb(153, 153, 153);
        }
      }
    }
    .f-content-container{
      width:100%;
      height:1.69rem;
      overflow-x:scroll;
      overflow-y:hidden;
      .f-content{
        height:1.64rem;
        white-space:nowrap;
        .f-item{
          width:0.94rem;
          height:1.64rem;
          margin-left:0.1rem;
          display:inline-block;
          vertical-align:top;
          .f-img{
            width:0.94rem;
            height:0.94rem;
            position:relative;
            img{
              width:100%;
            }
            span{
              position:absolute;
              bottom:0;
              left:0;
              width:0.32rem;
              height:0.16rem;
              background-image: linear-gradient(to right, rgb(239, 99, 84), rgb(225, 54, 89));
              border-radius: 0 0.07rem 0.07rem 0;
              color:#fff;
              font-size:0.12rem;
            }
          }
          .f-text{
            width:0.94rem;
            height:0.64rem;
            padding:0.04rem 0.06rem 0.06rem 0.06rem;
            .f-title{
              font-size:0.13rem;
              white-space:normal;
              overflow:hidden; 
              text-overflow:ellipsis;
              display:-webkit-box; 
              -webkit-box-orient:vertical;
              -webkit-line-clamp:2; 
            }
            .f-price{
              color:rgb(182, 9, 9);
              font-size:0.13rem;
              & span:nth-child(1){
                font-weight:500;
              }
              & span:nth-child(2){
                text-decoration:line-through;
                color:rgb(153, 153, 153);
                font-size:0.1rem;
                transform: scale(0.5);
              }
            }
          }
        }
      }
    }
  }
  
`
export {
  FlashSaleContainer
}