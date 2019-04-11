import Styled from 'styled-components'

const YtatsteContainer = Styled.div`
  height: 100%;
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  main{
    overflow-y:scroll;
    height: 6rem;
    width:3.75rem;
  }
`

export {
  YtatsteContainer
}