import styled from 'styled-components';

export default function CityFlySkyFooter() {

    const FooterBox = styled.div`
      $blehness: 50%;

      background: #0a1832;

      @keyframes pulse_hue {
        0% {
          filter: hue-rotate(0deg) grayscale($blehness);
        }
        100% {
          filter: hue-rotate(360deg) grayscale($blehness);
        }
      }
      box-sizing: border-box;
      padding-bottom: 10px;
      background-size: 100% 100%;

      .line {
        width: 1100px;
        height: 1px;
        margin: 0px auto 0px;
        background: rgba(255, 255, 255, 0.10);
      }




      .dao-footer-part3 {
        margin: 30px 0;
        color: white;
        text-align: center;
      }

      @keyframes twinkleWhite {
        0% {
          box-shadow: 0 0 0 #eee;
        }
        50% {
          box-shadow: 0px 0px 50px #eee;
        }
        100% {
          box-shadow: 0 0 0 #eee;
        }
      }

    `
    const navTo = (url) => {
        console.log(url)
    }
    return (
        <FooterBox>



            <div className="dao-footer-part3">
                Copyright@2022 www.cityflysky.top
            </div>
        </FooterBox>
    )

}
