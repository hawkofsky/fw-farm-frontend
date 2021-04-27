import styled from 'styled-components'

const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    min-width: 280px;
    // max-width: 31.5%;
    max-width: 40%;
    width: 100%;
    // margin: 0 8px;
    margin: 0 32px;
    margin-bottom: 32px;
  }
`

export default FlexLayout
