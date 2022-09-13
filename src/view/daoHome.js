
import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { useConnect } from "../api/contracts";
import {getContractByName} from "../api/connectContract"
function DaoHome (props){

    const DaoHome = styled.div`
    `
    const { state, dispatch } = useConnect();
    let contract
    useEffect(async () => {
        console.log(state.api)

        contract =await getContractByName("erc20",state.api,)
        console.log(contract)

    }, []);
    const transfer = ()=>{
        console.log(contract)
        if(contract){
            contract.methods.transfer("0x931f176Bee590f13ca2B9D163C135F065c7A22cC", 22330000).send({
                from: state.account,
                gas: 100000
            }).then(res => {
                console.log(res)
            })
        }
    }
    return (
        <DaoHome className='daoHome daoContentBg'>
            <div className="content-box">
                <div className="box-nav">
                    <div className="item">
                        HOME
                    </div>
                    <div className="item">
                        PROPOSAL
                    </div>
                    <div className="item">
                        FINANCIAL
                    </div>
                    <div className="item">
                        MEMBER
                    </div>
                </div>
                <div className="content">
                    <button onClick={()=>transfer()}>Test ERC20</button>
                </div>
            </div>

        </DaoHome>
    )
}
export default DaoHome
