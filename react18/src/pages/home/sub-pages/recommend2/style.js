import styled from 'styled-components';

export const DivWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 200px;
  .axios-p {
    width: 700px;
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
  }
`

export const ImgWrapper = styled.div`
  background: url(${props => props.bgImage}) center center;
  background-size: contain;
  width: 200px;
  height: 200px;
`
