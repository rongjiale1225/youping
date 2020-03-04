import styled from 'styled-components'

const BillBoardContainer = styled.div `
  width:100%;
  height:1.63rem;
  padding: 0.1rem .15rem;
  margin-bottom: 0.05rem;
  background:#fff;
  .b-header{
    color: #3D3D3D;
    font-size:0.17rem;
  }
  .b-main{
    position: relative;
    height: 1.2rem;
    padding: .10rem .20rem .10rem 1.15rem;
    .b-img{
      position: absolute;
      left: 0;
      top: .10rem;
      bottom: 0;
      width: 1.00rem;
      height: 1.00rem;
      background-size: 1.00rem;
    }
    .b-more{
      position: absolute;
      right: 10px;
      top: 0;
      bottom: 0;
      width: 20px;
      background: url(//sss.qingting.fm/v2/images/ic_arrow_back.png) no-repeat right center;
      background-size: 6px;
    }
    .b-item{
      width:100%;
      height:0.33rem;
      line-height: 33px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #676B7B;
    }
  }
  
`
export {
  BillBoardContainer
}