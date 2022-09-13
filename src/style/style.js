import {createGlobalStyle} from "styled-components";
import bg from "../imgs/background.png"
const GlobalStyle = createGlobalStyle`
  div {
    box-sizing: border-box;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
    font-size: 14px;
  }

  .daoContentBg {
    background: url(${bg});
    flex: 1;
  }

  .content-box {
    box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.05);

    border-radius: 20px;
    width: 1200px;
    margin: 10px auto;
    background: #fff;
    padding-bottom: 20px;
  }

  .box-nav {
    display: flex;
    padding: 0 20px;
    border-bottom: 1px solid #eee;

    .item {
      user-select: none;
      width: 150px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      cursor: pointer;

      &.active {
        color: #F96AAF;
        border-bottom: 1px solid #F96AAF;
      }
    }
  }

  .cityflysky-button {
    background: linear-gradient(90deg, #0bc3ec 0%, #0ccb9e 64%, #00c681 100%);
    border-radius: 6px;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    color: #fff;
    font-size: 18px;
    position: relative;
    background-size: 200%;
    &:active {
      transform: translate(2px, 2px);
    }
    &:hover{
      background-position-x: -100%;
    }
    &:after {
      content: '';
      position: absolute;
      top: 90%;
      width: 100%;
      height: 10px;
      background: linear-gradient(90deg, #0bc3ec 0%, #0ccb9e 64%, #00c681 100%);
      border-radius: 10px;
      filter: blur(10px);
    }
  }
`
export default GlobalStyle
