import styled from "styled-components";
import {Component} from "react";
class ConnectWallet extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isShowConnectStatus:false,
            isConnected:false
        }
    }

    render(){
        const connectWallet = async () => {

        }
        const ConnectBox = styled.div`
          .cityflysky-button{
            width: 160px;
            height: 36px;
          }
      `
        const showWallet=async ()=>{
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x4' }],
            });
            if (this.isConnected) {
                this.setState({
                    isShowConnectStatus:true
                })
            } else {
                this.setState({
                    isShowConnectStatus:false
                })
            }
        }
        return (
            <ConnectBox>
                <button onClick={()=>showWallet()} className="cityflysky-button">
                    Connect Wallet
                </button>
            </ConnectBox>
        )
    }
}
export default ConnectWallet
