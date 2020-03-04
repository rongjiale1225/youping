import styled from 'styled-components';

const NavListContainer = styled.div `
  width: 100%;
  height: 0.85rem;
  background: #fff;
  ul{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    li{
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img{
        width: 0.45rem;
        height: 0.45rem;
        margin-bottom: 0.05rem;
      }
      span{
        font-size: 0.12rem;
        color: rgb(85, 86, 102);
      }
    }
  }
`
export {
  NavListContainer
}