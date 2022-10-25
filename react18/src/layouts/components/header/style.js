import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 70px;
  background-color: #fff;

  .content {
    height: 70px;
    line-height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0 80px;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;


  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
  }
`




