import styled from "styled-components";
import React, {useContext, useEffect, useReducer} from "react";
import getWeb3 from "../api/getWeb3";
import reducer from "../api/reducer";

function ConnectWallet() {

    const [state, dispatch] = useReducer(reducer);
    const connectWallet = async () => {
        await getWeb3().then(result => {

            dispatch({type: "CONNECT", payload: result.web3})

            result.web3.eth.net.getId().then(netWarkId => {
                console.log(netWarkId)
                dispatch({type: "SET_NETWORKID", payload: netWarkId})
            })
            result.web3.eth.getCoinbase().then(account => {
                console.log(account)
                dispatch({type: "SET_ACCOUNT", payload: account})
                if (account) {
                    dispatch({type: "CONNECT_SUCCESS"})
                }
            })

        })
    }
    const ConnectBox = styled.div`
      .cityflysky-button {
        width: 160px;
        height: 36px;
      }
    `
    const showWallet = async () => {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{chainId: '0x4'}],
        });
        if (this.isConnected) {
            this.setState({
                isShowConnectStatus: true
            })
        } else {
            this.setState({
                isShowConnectStatus: false
            })
        }
    }
    return (
        <ConnectBox>
            <button onClick={() => connectWallet()} className="cityflysky-button">
                {state&&state.account?state.account.substr(0,5)+'...'+state.account.substr(state.account.length-5,state.account.length):"Connect Wallet"}
            </button>
        </ConnectBox>
    )
}

export default ConnectWallet
