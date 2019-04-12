import styled from 'styled-components'

const TopBarContainer = styled.div `
  width:100%;
  height:0.5rem;
  position:fixed;
  top:0;
  opacity: 0.98;
  background-image: linear-gradient(-127deg, #FD5353 0%, #FF8A8A 100%);
  display:flex;
  .logo{
    width:0.96rem;
    margin-left:0.15rem;
    display:flex;
    align-items:center;
    img{
      width:100;
      height:0.24rem;
    }
  }
  .text{
    width:1.25rem;
    margin-left:0.1rem;
    display:flex;
    align-items:center;
    img{
      width:100;
      height:0.14rem;
    }
  }
  .app{
    position: absolute;
    top: 11px;
    bottom: 11px;
    text-align: center;
    line-height: 28px;
    font-size: 13px;
    color: #FD5353;
    width: 75px;
    right: 15px;
    background: #ffffff;
    box-shadow: 0 1px 6px 0 rgba(194,34,34,0.48);
    border-radius: 100px;
  }
`
export {
  TopBarContainer
}