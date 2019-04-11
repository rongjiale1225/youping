import styled from 'styled-components'


const StarProductContainer = styled.div `
  width:100%;
  height:1.5rem;
  background:#fff;
  margin: 0.1rem 0rem;
  display:flex;
  background-color: rgb(236, 240, 225);
  .s-box{
    display:flex;
    .s-content{
      width:2.25rem;
      height:1.5rem;
      margin-left:0.1rem;
      .starLogo{
        width:0.59rem;
        height:0.17rem;
        margin-top:0.15rem;
        margin-left:0.1rem;
        img{
          width:100%;
        }
      }
      h3{
        width:1.95rem;
        height:0.18rem;
        margin:0.1rem 0 0 0.1rem;
        font-size:0.15rem;
        color:rgb(51, 51, 51);
      }
      p{
        width:1.95rem;
        height:0.12rem;
        font-size:0.12rem;
        color:rgb(153, 153, 153);
        margin:0.08rem 0 0 0.1rem;
      }
      .s-price{
        width:1.95rem;
        height:0.15rem;
        font-size:0.12rem;
        color:rgb(179, 18, 22);
        margin:0.1rem 0 0 0.1rem;
      }
      .sold{
        width:0.91rem;
        height:0.21rem;
        margin: 0.1rem 0 0 0.1rem;
        color:#fff;
        font-weight:500;
        font-size:.15rem;
        text-align:center;
        background-image: linear-gradient(to right, rgb(210, 182, 121), rgb(174, 136, 76));
      }
    }
    .s-img{
      flex:1;
      display:flex;
      justify-content:center;
      align-items:center;
      img{
        width:1.2rem;
        height:1.2rem;
      }
    }
  }
  
`

export {
  StarProductContainer
}