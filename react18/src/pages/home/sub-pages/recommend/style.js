import styled from 'styled-components';

export const DivWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 200px;
  .counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .count-num {
      display: inline-block;
      width: 50px;
      text-align: center;
    }
  }
  .counter-p {
    width: 500px;
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
  }
`

export const ImgWrapper = styled.div`
  background: url(${props => props.bgImage}) center center;
  width: 200px;
  height: 200px;
`
