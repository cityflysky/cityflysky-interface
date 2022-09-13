import React, {useContext, useEffect, useReducer} from "react";
import reducer from "./reducer"
import initState from "./initState"
import getWeb3 from "./getWeb3";

const connect = async (state, dispatch) => {

    const {apiState} = state;
    if (apiState) {
        console.log(apiState)
        return
    }

    dispatch({type: 'CONNECT_INIT'});
    try{
        await window.ethereum.enable()
    }catch (e){
        alert(e)
    }
    await getWeb3().then(result => {
        console.log(result.web3)
        dispatch({type: "CONNECT", payload: result.web3})


        result.web3.eth.net.getId().then(netWarkId => {
            console.log(netWarkId)
            dispatch({type: "SET_NETWORKID", payload: netWarkId})
        })
        result.web3.eth.getCoinbase().then(account => {
            console.log(account)
            dispatch({type: "SET_ACCOUNT", payload: account})
            if(account){
                dispatch({type: "CONNECT_SUCCESS"})
            }
        })

    })

}

const ConnectContext = React.createContext();

const ConnectProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const {api,} = state

    if (api == null) {
        connect(state, dispatch)
    }

    return <ConnectContext.Provider value={{state, dispatch}}>
        {props.children}
    </ConnectContext.Provider>
}
const useConnect = () => ({...useContext(ConnectContext)});
export {ConnectProvider, useConnect}
