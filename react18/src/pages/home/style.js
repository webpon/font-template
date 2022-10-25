import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const TopMenu = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 70px;
    a {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      padding: 0 20px;
      margin-right: 10px;
      color: #fff;
      &:hover, &.active {
        text-decoration: none;
        background-color: #9B0909;
        border-radius: 20px;
      }
  }
`