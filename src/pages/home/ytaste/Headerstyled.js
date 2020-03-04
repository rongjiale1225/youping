import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 0.38rem;
  width:100%;
  background: #fff;
  display: flex;
  .logo{
    width: 0.76rem;
    display: flex;
    align-items: center;
    img{
      width: 0.64rem;
      height: 0.28rem;
    }
  }
  .searchContainer{
    flex: 1;
    display: flex;
    align-items: center;
    .search{
      width: 100%;
      height: 0.28rem;
      background: rgb(238, 238, 238);
      display: flex;
      align-items: center;
      img{
        width: 0.13rem;
        height: 0.13rem;
        margin-left: 0.06rem;
      }
      .search-content{
        color: #999999;
        font-size: 0.12rem;
        margin-left: 0.06rem;
      }
    }
  }
  .message{
    width: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 0.28rem;
      height: 0.28rem;
    }
  }
`